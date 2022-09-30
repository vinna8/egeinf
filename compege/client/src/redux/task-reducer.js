import { taskAPI } from "../api/api";
import { getTopics, getTasks, toggleIsFetching, resultsData, scoreData, generatedTasks } from "./actions";
import  { GET_TOPICS, GET_TASKS, GET_RESULT, GET_SCORE, RANDOM_TASKS } from "./types";

let initialState = {
    topics: [],
    tasks: [],
    randomTasks: [],
    results: [],
    score: 0
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOPICS:
            return {
                ...state,
                ...action.data,
            }
        case GET_TASKS:
            return {
                ...state,
                ...action.data
            }
        case GET_RESULT:
            return {
                ...state,
                ...action.data,
            }
        case GET_SCORE:
            return {
                ...state,
                ...action.data,
            }
        case RANDOM_TASKS:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const topics = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        taskAPI.topics()
        .then(response => {
            dispatch(toggleIsFetching(false));
            let topics = response.data;
            dispatch(getTopics(topics));
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const download = (file) => {
    return (dispatch) => {
        taskAPI.download(file)
        .then(response => {
            const blob = response.data;
            console.log(response.data)
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `ege${file.number}`;
            document.body.appendChild(link);
            link.click();
            link.remove();
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const getAllTasks = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        taskAPI.tasks()
        .then(response => {
            dispatch(toggleIsFetching(false));
            let tasks = response.data;
            dispatch(getTasks(tasks));
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const randomTasks = (randomTasks) => {
    return (dispatch) => {
        dispatch(generatedTasks(randomTasks));
    }
}

export const getResults = (results, score) => {
    return (dispatch) => {
        dispatch(resultsData(results));
        dispatch(scoreData(score));
    }
}

export default taskReducer;
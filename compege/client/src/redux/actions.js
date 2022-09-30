import  { SET_USER_DATA, SET_ERROR_AUTH, SET_ERROR_REG, CLEAR_USER_DATA, TOGGLE_IS_FETCHING, DISABLED,
    GET_TOPICS, GET_TASKS, GET_RESULT, GET_SCORE, RANDOM_TASKS, SET_STATISTIC_DATA,
    UPDATE_STATISTIC } from "./types";

export const setAuthUserData = (user) => {
    return {
        type: SET_USER_DATA,
        data: {user}
    };
}

export const setStatisticData = (statistic) => {
    return {
        type: SET_STATISTIC_DATA,
        data: {statistic}
    };
}

export const setErrorAuth = (messageErrorAuth) => {
    return {
        type: SET_ERROR_AUTH,
        data: {messageErrorAuth}
    };
}

export const setErrorReg = (messageErrorReg) => {
    return {
        type: SET_ERROR_REG,
        data: {messageErrorReg}
    };
}

export const clearAuthUserData = () => {
    return {
        type: CLEAR_USER_DATA,
    };
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    };
}

export const isDisabled = (isDisabled) => {
    return {
        type: DISABLED,
        isDisabled
    };
}

export const getTopics = (topics) => {
    return {
        type: GET_TOPICS,
        data: {topics}
    };
}

export const getTasks = (tasks) => {
    return {
        type: GET_TASKS,
        data: {tasks}
    }
}

export const resultsData = (results) => {
    return {
        type: GET_RESULT,
        data: {results}
    }
}

export const scoreData = (score) => {
    return {
        type: GET_SCORE,
        data: {score}
    }
}

export const generatedTasks = (randomTasks) => {
    return {
        type: RANDOM_TASKS,
        data: {randomTasks}
    }
}

export const updateStat = (statistic) => {
    return {
        type: UPDATE_STATISTIC,
        data: {statistic}
    }
}
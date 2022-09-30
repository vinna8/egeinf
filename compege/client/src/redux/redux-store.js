import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import authReducer  from "./auth-reducer";
import taskReducer from "./task-reducer";
import thunkMiddleware from 'redux-thunk'; 

let reducers = combineReducers({
    auth: authReducer,
    task: taskReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
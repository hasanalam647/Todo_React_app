import { combineReducers } from "@reduxjs/toolkit";
import todos from './todos-item.slice'


const reducers = combineReducers({
    todos : todos
})


export default reducers;
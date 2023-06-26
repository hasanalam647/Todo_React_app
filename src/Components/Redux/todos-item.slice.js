import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    setTodos: (state, action) => {
    state = [...action.payload];
    return state;
    },
    addTask: (state, action) => {
      state.push({
        value: action.payload,
        id: Date.now(),
        isDone: false,
        isEditable: false,
      });
    },
    taskDelete: (state, action) => {
      const stateIndx = state.findIndex((value) => value.id === action.payload);
      if (stateIndx >= 0) {
        state.splice(stateIndx, 1);
      }
    },
    toggleEdit: (state, action) => {
      const stateItemIndex = state.findIndex(
        (value) => value.id === action.payload
      );
      if (stateItemIndex >= 0) {
        let todoItem = { ...state[stateItemIndex] };
        todoItem.isEditable = !todoItem.isEditable;
        state[stateItemIndex] = todoItem;
      }
    },

    taskSave: (state, action) => {
      const stateIndex = state.findIndex(
        (value) => action.payload.id === value.id
      );
      if (stateIndex >= 0) {
        let todoItem = { ...state[stateIndex] };
        todoItem.value = action.payload.newvalue;
        todoItem.isEditable = false;
        state[stateIndex] = todoItem;
      }
    },
    taskDone: (state, action) => {
      const stateItemIndex = state.findIndex(
        (value) => value.id === action.payload
      );
      if (stateItemIndex >= 0) {
        let todoDone = { ...state[stateItemIndex] };
        todoDone.isDone = !todoDone.isDone;
        state[stateItemIndex] = todoDone;
      }
    },
  },
});

export default todos.reducer;
export const {
  setTodos,
  addTask,
  taskDelete,
  taskSave,
  taskDone,
  toggleEdit,
} = todos.actions;

import { createSlice } from "@reduxjs/toolkit";

const reducers = {
  addTask(state, action) {
    state.push(action.payload);
  },
  removeTask(state) {
    state.pop();
  }
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
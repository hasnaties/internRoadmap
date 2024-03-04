import { createSlice } from "@reduxjs/toolkit";

const reducers = {
  async setTasks(state) {
    const rawData = await fetch(import.meta.env.VITE_URL);
    const data = await rawData.json();
    console.log(data);

    return {
      ...state,
      tasks: data
    }
  }
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers
});

export const { setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
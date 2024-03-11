import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../reducers/tasksReducer";

const fetchData = async () => {
  const data = await fetch(import.meta.env.VITE_URL);
  return (await data.json());
};
const data = await fetchData();

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
  preloadedState: {

    tasks: data
  }
});

export default store;
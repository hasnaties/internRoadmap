import { addTask, removeTask } from "../reducers/tasksReducer";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
  //redux-state
  const dispatch = useDispatch();
  const list = useSelector((state) => state.tasks);


  //Add the task in redux state
  const handleAdd = () => {
    const task = {
      _id: 55,
      title: "redux"
    }
    dispatch(addTask(task));
  };
  //Remove the last-task in redux state
  const handleRemove = () => {
    dispatch(removeTask());
  };

  return (
    <>
      <h1>List</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>

      {list.map((task) => {
        return (<p key={task.title}>{task.title}</p>)
      })}
    </>
  )
}

export default List;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../reducers/tasksReducer";

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.tasks)
  const [reload, setReload] = useState(false);

  // - Fetch Data on mounting
  useEffect(() => {
    console.log('fired.');
    dispatch(setTasks());
  }, []);

  // - Reload Data
  useEffect(() => {
    console.log('Reload');
  }, [reload])

  //Change reload state
  const handleClick = () => setReload(!reload);

  return (
    <>
      <h1>List</h1>
      <button onClick={handleClick}>Reload</button>

      {list.map((task) => {
        return (<p key={task.title}>{task.title}</p>)
      })}
    </>
  )
}

export default List;
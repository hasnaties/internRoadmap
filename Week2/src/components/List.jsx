import { useEffect, useState } from "react";

const List = () => {
  const [list, setList] = useState([{ title: 'No Data' }]);
  const [reload, setReload] = useState(false);


  //Fetch Data
  const fetchData = () => {
    fetch('http://localhost:4000/api/tasks').then((res) => {
      res.json().then((tasks) => {
        setList(tasks);
      })
    })
  }
  // - Fetch Data on mounting
  useEffect(() => {
    fetchData();
  }, []);

  // - Reload Data
  useEffect(() => {
    console.log('Reload');
    fetchData();
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
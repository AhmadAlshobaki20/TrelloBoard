import { useContext, useEffect } from "react";
import BoardContext from "../context/context";

const AddSubTask = () => {
  const { subTask, setSubTask, createSubTask } = useContext(BoardContext);
  // create arrayOfSubTask to set it ti th local storage
  // const arrayOfSubTask = JSON.parse(localStorage.getItem("subtask")) || [];
  // console.log(arrayOfSubTask);
  const handleSubTask = (event) => {
    const { name, value } = event.target;
    setSubTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };
  return (  
    <>
      <div className="wrap-subTask">
        <input
          placeholder="sub task"
          className="fields"
          onChange={handleSubTask}
          name="title"
          value={subTask.title}
        />
        <i className="fa-solid fa-x"></i>
      </div>
      <button
        id="Add-btn"
        onClick={() => {
          // arrayOfSubTask.push(subTask);
          // localStorage.setItem("subtask", JSON.stringify(arrayOfSubTask));
          createSubTask();
        }}
      >
        +Add New Subtask
      </button>
    </>
  );
};

export default AddSubTask;

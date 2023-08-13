import { useContext} from "react";
import BoardContext from "../context/context";

const AddSubTask = () => {
  const { subTask, setSubTask, createSubTask } = useContext(BoardContext);
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
          createSubTask();
        }}
      >
        +Add New Subtask
      </button>
    </>
  );
};

export default AddSubTask;

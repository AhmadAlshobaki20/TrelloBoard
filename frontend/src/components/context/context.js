import { createContext, useEffect, useState } from "react";
import axios from "axios";
const BoardContext = createContext();

function Provider({ children }) {
  // create list object
  const [listContent, setListContent] = useState({
    title: "",
  });
  // create array of list
  const [Lists, setLists] = useState([]);

  // create task Object
  const [taskContent, setTaskContent] = useState({
    title: "",
    description: "",
    status: "",
  });
  // create array of task
  const [Tasks, setTasks] = useState([]);

  // create subtask Object
  const [subTask, setSubTask] = useState({
    title: "",
    status: "",
  });

  // create array of subtasks
  const [subTasks, setSubTasks] = useState([]);

  // current list id
  const [list_id, setListId] = useState("");

  // current task Id
  const [task_id, setTaskId] = useState("");

  // get current list id
  const getCurrentListId = (id) => {
    const listId = Lists.find((list) => {
      return list._id === id && list.title === taskContent.status;
    });
    if (listId) {
      setListId(listId._id);
    }
  };
  useEffect(() => {
    getAllList();
    getTasks();
  }, []);

  // get All lists from dataBase
  const getAllList = async () => {
    try {
      const response = await axios.get("api/v1/lists");
      setLists(response.data.data["lists"]);
    } catch (err) {
      console.log(err);
    }
  };
  // set list to data base
  const createList = async () => {
    try {
      const response = await axios.post("api/v1/lists", listContent);
      // console.log(response);
      setLists([...Lists, response.data["newList"]]);
    } catch (err) {
      console.log(err);
    }
  };

  //---------------------------------------------------------tasks----------------------------------------------------------------------
  // create task
  const createTask = async () => {
    try {
      const response = await axios.post(
        `api/v1/lists/${list_id}/tasks`,
        taskContent
      );
      console.log(response.data);
      // console.log("success create task");
      setTasks([...Tasks, response.data["Task"]]);
    } catch (err) {
      console.log(err);
    }
  };

  // get All task
  const getTasks = async () => {
    try {
      const response = await axios.get("api/v1/tasks");
      setTasks(response.data.data["tasks"]);
    } catch (err) {
      console.log(err);
    }
  };

  const addTask = (title, description, status) => {
    const updateTask = [...Tasks, { title, description, status }];
    setTasks(updateTask);
  };
  // delete task
  const deleteTask = async (taskId) => {
    const updateTask = Tasks.filter((task) => {
      return task._id !== taskId;
    });
    setTasks(updateTask);
    // delete task from dataBase
    await axios.delete(`api/v1/tasks/${taskId}`);
    console.log("success delete process");
  };
  // -----------------------------------------------------------subTask-------------------------------------------------------------------------

  const createSubTask = async () => {
    try {
      if (task_id) {
        const response = await axios.post(
          `api/v1/tasks/${task_id}/subtask`,
          subTask
        );
        console.log("success add subtask");
        console.log(response.data);
        setSubTasks([...subTasks, response.data.data.newSubTask]);
        setTaskId(response.data.data.newSubTask.taskId);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    subTASKSS();
  }, []);
  const subTASKSS = async () => {
    try {
      const response = await axios.get("api/v1/subtask");
      setSubTasks(response.data.data.subTasks);
      console.log(response.data.data.subTasks)
    } catch (err) {
      console.log(err);
    }
  };
  
  const valueToShare = {
    subTASKSS,
    Lists,
    Tasks,
    getAllList,
    setListContent,
    listContent,
    createList,
    addTask,
    taskContent,
    setTaskContent,
    createTask,
    getTasks,
    deleteTask,
    getCurrentListId,
    subTask,
    setSubTask,
    subTasks,
    setSubTasks,
    createSubTask,
    // getAllSubTask,
    task_id,
    setTaskId,
  };

  return (
    <BoardContext.Provider value={valueToShare}>
      {children}
    </BoardContext.Provider>
  );
}

export { Provider };
export default BoardContext;

//List Current ID
// const [listId, setListId] = useState("");

// const handleListId = (event)=>{
//   setListId(event.target.value)
//   console.log(listId)
// }
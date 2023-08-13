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

  const [newTitle, setNewTitle] = useState("");

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
    getAllSubTask();
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
      getAllList();
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


  const deleteTask = async (taskId) => {
    const delTask = Tasks.filter((task) => {
      return task._id !== taskId;
    });
    setTasks(delTask);
    // delete task from dataBase
    await axios.delete(`api/v1/tasks/${taskId}`);
    console.log("success delete process");
  };



  const updateTask = async (taskId) => {
    const updateTask = Tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title: newTitle };
      }
      return task;
    });
    setTasks(updateTask);
    const response = await axios.patch(`api/v1/tasks/${taskId}`, {
      title: newTitle,
    });
    setTaskContent({});
    console.log(response);
  };

  //-----------------------------------------------------------subTask-------------------------------------------------------------------------

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
  const getAllSubTask = async () => {
    try {
      if (subTasks) {
        const response = await axios.get("api/v1/subtask");
        setSubTasks(response.data.data.subTasks);
        console.log(response.data.data.subTasks);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const valueToShare = {
    Lists,
    Tasks,
    getAllList,
    setListContent,
    listContent,
    createList,
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
    getAllSubTask,
    task_id,
    setTaskId,
    updateTask,
    setNewTitle,
  };

  return (
    <BoardContext.Provider value={valueToShare}>
      {children}
    </BoardContext.Provider>
  );
}

export { Provider };
export default BoardContext;


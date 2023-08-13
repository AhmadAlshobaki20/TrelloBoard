import "./Task.css";
import React, { useContext, useEffect } from "react";
import Modal from "react-modal";
import "./TaskContentDialogue.css";
import BoardContext from "../context/context";


const Task = ({task}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const { deleteTask, subTasks,setTaskId,} =
    useContext(BoardContext);

  const openModal = () => {
    setIsOpen(true);
  };
  const afterOpenModal = () => {
    subtitle.style.color = "#ededf4";
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // to set current task id to task_id inside the context 
  useEffect(()=>{
    setTaskId(task._id)
  },[])

  return (
    <>
      <section id="task-wrap">
        <div
          id="task"
          onClick={() => {
            openModal();
            console.log(task._id);
          }}
        >
          <h4>
            {task.title}
            <br />
            <span>0 of 3 subtasks</span>
            <br />
          </h4>
        </div>
        <i
          className="fa-solid fa-x task-delete"
          onClick={() => {
            deleteTask(task._id);
          }}
        ></i>
      </section>
      <div className="modal-body">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          id="inner-modal"
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{task.title}</h2>
          <form
            // onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <p id="desc">{task.description}</p>
            <label>Subtasks({subTasks.length}of3)</label>
            {subTasks
              .filter((subTask) => {
                return subTask.taskId === task._id;
              })
              .map((subTask) => {
                return (
                  <div className="wrap-sub-task">
                    <input type="checkbox" selected id="check1" />
                    <label for="check1">{subTask.title}</label>
                  </div>
                );
              })}
            <span>Status</span>
            <select name="status">
              <option>TODO</option>
              <option>DOING</option>
              <option>DONE</option>
            </select>
          </form>
        </Modal>
      </div>
    </>
  );
};
export default Task;

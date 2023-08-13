import "./Task.css";
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import "./TaskContentDialogue.css";
import BoardContext from "../context/context";

const Task = ({ task }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [completeTask, setCompleteTask] = useState(0);
  const [openEditField, setOpenEditField] = useState(false);
  const {
    deleteTask,
    subTasks,
    setTaskId,
    updateTask,
    setNewTitle,
    getTasks,
    Lists,
    setSubTasks,
  } = useContext(BoardContext);

  const openModal = () => {
    setIsOpen(true);
  };
  const afterOpenModal = () => {
    subtitle.style.color = "#ededf4";
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleUpdateTask = (event) => {
    setNewTitle(event.target.value);
  };

  const handleOpenFelidEdit = () => {
    setOpenEditField(!openEditField);
  };

  const filterSubTask = subTasks.filter((subTask) => {
    return subTask.taskId === task._id;
  });
// to handle checkBox
  const handleCheckboxChange = (taskId) => {
    const updatedSubTasks = subTasks.map((task) => {
      if (task._id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setSubTasks(updatedSubTasks);
  };
  // to set current task id to task_id inside the context
  useEffect(() => {
    setTaskId(task._id);
    getTasks();
  }, []);

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
            <span>
              {completeTask} of {filterSubTask.length} subtasks
            </span>
            <br />
          </h4>
        </div>
        <i
          className="fa-solid fa-x task-delete"
          onClick={() => {
            deleteTask(task._id);
            localStorage.removeItem("lengthOfSubTask");
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
          <div className="head-section">
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{task.title}</h2>
            {openEditField && (
              <div id="wrap-edit">
                <input
                  id="edit-field"
                  placeholder="setNewTitle"
                  onChange={handleUpdateTask}
                />
                <button
                  id="edit-btn"
                  onClick={() => {
                    updateTask(task._id);
                  }}
                >
                  edit
                </button>
              </div>
            )}
            <i
              class="fas fa-edit fa-lg"
              style={{ color: "#d1d1d1" }}
              onClick={handleOpenFelidEdit}
            ></i>
          </div>
          <form
            // onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <p id="desc">{task.description}</p>
            <label>
              Subtasks({completeTask} of {filterSubTask.length})
            </label>
            {filterSubTask.map((subTask) => {
              console.log(subTask)
              return (
                <div key={subTask._id} className="wrap-sub-task">
                  {!subTask.complete ? (
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(task._id)}
                      onClick={(event) => { 
                        if (event.target.checked) {
                          setCompleteTask(completeTask + 1);
                        } else {
                          setCompleteTask(completeTask - 1);
                        }
                      }}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      onClick={(event) => {
                        if (event.target.checked) {
                          setCompleteTask(completeTask + 1);
                        } else {
                          setCompleteTask(completeTask - 1);
                        }
                      }}
                    />
                  )}
                  <label>{subTask.title}</label>
                </div>
              );
            })}
            <span>Status</span>
            <select name="status">
              {Lists.map((list) => {
                return <option>{list.title}</option>;
              })}
            </select>
          </form>
        </Modal>
      </div>
    </>
  );
};
export default Task;

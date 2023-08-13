import React, { useContext, useEffect } from "react";
import Modal from "react-modal";
import "./AddTaskDialogue.css";
import BoardContext from "../context/context";
import { AddSubTask } from "../intermediary";
const AddTaskModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    getTasks();
  }, []);
  // call function and stats from context
  const {
    taskContent,
    setTaskContent,
    createTask,
    Lists,
    getTasks,
    getCurrentListId,
  } = useContext(BoardContext);

  // create function to handle form
  const HandleSetTaskContent = (event) => {
    const { name, value } = event.target;
    setTaskContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#ededf4";
  }
  function closeModal() {
    setIsOpen(false);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <button onClick={openModal}>+Add New Task</button>
      <div className="modal-body">
        <Modal
          id="Modal"
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add New Task</h2>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <label>Title</label>
            <input
              className="fields"
              onChange={HandleSetTaskContent}
              name="title"
              value={taskContent.title}
              placeholder="please enter the title of task"
            />
            <label>Description</label>
            <textarea
              placeholder="please enter the description of Task"
              id="description-field"
              className="fields"
              onChange={HandleSetTaskContent}
              name="description"
              value={taskContent.description}
            ></textarea>
            <label>Subtasks</label>
            <AddSubTask />
            <label>status</label>
            <select
              name="status"
              value={taskContent.status}
              onChange={HandleSetTaskContent}
            >
              <option>---</option>
              {Lists.map((list) => {
                return (
                  <option key={list._id} onSelect={getCurrentListId(list._id)}>
                    {list.title}
                  </option>
                );
              })}
            </select>
            <button
              id="create-btn"
              onClick={() => {
                createTask();
              }}
            >
              Crate Task
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default AddTaskModal;

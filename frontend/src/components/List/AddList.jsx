import "./AddList.css";
import { useContext, useState } from "react";
import { ShowList } from "../intermediary";
import BoardContext from "../context/context";
const AddList = () => {
  const [AddListToggle, setAddListToggle] = useState(false);
  // call functions and stats from context
  const { listContent, setListContent, createList } = useContext(BoardContext);

  const convertToggle = () => {
    setAddListToggle(!AddListToggle);
    console.log(AddListToggle);
  };

  const handleListContent = (event) => {
    const { name, value } = event.target;
    setListContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };
  // handle submit
  const HandleSubmit = (event) => {
    event.preventDefault();
    createList();
    // getAllList();
  };

  // I want to pass the list array to the list to show the components that I created

  return (
    <>
      <ShowList />
      {!AddListToggle ? (
        <div id="add-list" onClick={convertToggle}>
          + New Column
        </div>
      ) : (
        <div id="inner-add-task">
          <form onSubmit={HandleSubmit}>
            <br />
            {/* Title input*/}
            <input
              // value={Title}
              name="title"
              value={listContent.title}
              onChange={handleListContent}
            />
            <br />
            <button>Add List</button>
            <i className="fa-solid fa-x" onClick={convertToggle}></i>
          </form>
        </div>
      )}
    </>
  );
};
export default AddList;

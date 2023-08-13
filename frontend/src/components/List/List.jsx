import "./List.css";
// import { ShowTask } from "../intermediary";
import { Task } from "../intermediary";
import { useContext } from "react";
import BoardContext from "../context/context";
const ListTask = ({ list }) => {
  const { Tasks } = useContext(BoardContext);

  const showTaskIntoList = Tasks.filter((task) => {
    return task.listId === list._id;
  }).map((task) => {
    return <Task key={task._id} task={task}/>;
  });

  return (
    <>
      <div className="wrap-list">
        <div id="description">
          <span style={{ backgroundColor: `${list.color}` }} id="circle"></span>
          <span>{list.title}</span>
        </div>
        {/* <ShowTask list={list}/> */}
        {showTaskIntoList}
      </div>
    </>
  );
};

export default ListTask;

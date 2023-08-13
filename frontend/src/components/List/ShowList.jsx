import { List } from "../intermediary";
import { useContext } from "react";
import BoardContext from "../context/context";
const ShowList = () => {
  const { Lists } = useContext(BoardContext);

  const listsOfList = Lists.map((list) => {
    return (
      <div key={list._id} style={{ display: "flex" }}>
        <List list={list} />
      </div>
    );
  });

  return <>{listsOfList}</>;
};

export default ShowList;

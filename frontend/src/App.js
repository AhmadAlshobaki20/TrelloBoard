import {Nav, SideBar, AddList, AddSubTask} from './components/intermediary'
import "./App.css";
function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <SideBar />
        <div className="lists">
          <AddList/>
        </div>
      </div>
    </>
  );
}

export default App;

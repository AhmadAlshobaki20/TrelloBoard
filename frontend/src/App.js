import { Nav, SideBar, AddList } from "./components/intermediary";
import "./App.css";
import StackedBarChart from "./components/Market/StackedBarChart.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <SideBar />
        <div className="lists">
          <Routes>
          <Route path="/" element={<AddList />}/>
          <Route path="/market" element={<StackedBarChart/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

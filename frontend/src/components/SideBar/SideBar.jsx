import "./SideBar.css";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <aside className="side-bar">
        {/* <div id='side-bar-list-item'> */}
        <span>all Borders(8)</span>
        <div className="sidebar-item">
          <i className="fa-brands fa-windows" style={{ color: "#ededed;" }}></i>
          <Link to="/" className="links">PlatformLaunch</Link>
        </div>
        <div className="sidebar-item">
          <i className="fa-brands fa-windows" style={{ color: "#ededed;" }}></i>
          <Link to="/market" className="links">Marketing</Link>
        </div>
        <div className="sidebar-item">
          <i className="fa-brands fa-windows" style={{ color: "#ededed;" }}></i>
          <span>Roadmap</span>
        </div>
        <div className="sidebar-item">
          <i className="fa-brands fa-windows" style={{ color: "#ededed;" }}></i>
          <span>+Create New Board</span>
        </div>
        {/* </div> */}
      </aside>
    </>
  );
};
export default SideBar;

import "./SideBar.css";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <aside className="side-bar">
          <span>all Borders(8)</span>
          <div className="sidebar-item">
            <i
              class="fa-solid fa-box fa-rotate-270 fa-lg"
              style={{ color: "#bdbdbd;" }}
            ></i>
            <Link to="/" className="links">
              PlatformLaunch
            </Link>
          </div>
          <div className="sidebar-item">
            <i
              class="fa-solid fa-box fa-rotate-270 fa-lg"
              style={{ color: "#bdbdbd;" }}
            ></i>
            <Link to="/market" className="links">
              Marketing
            </Link>
          </div>
          <div className="sidebar-item">
            <i
              class="fa-solid fa-box fa-rotate-270 fa-lg"
              style={{ color: "#bdbdbd;" }}
            ></i>
            <span>Roadmap</span>
          </div>
          <div className="sidebar-item" id="crate">
            <i
              class="fa-solid fa-box fa-rotate-270 fa-lg"
              style={{ color: "#bdbdbd;" }}
            ></i>
            <span>+Create New Board</span>
          </div>
      </aside>
    </>
  );
};
export default SideBar;

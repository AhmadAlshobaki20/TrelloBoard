import './Nav.css'
import {AddTaskModal} from '../intermediary';
const Nav = ()=>{
  return(
    <>
      <header>
        <div id="logo">
          <h2>Platform Launch</h2>
        </div>
        <div className="add-new-task">
        <AddTaskModal/>
        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>          
        </div>
      </header>
    </>
  )
}

export default Nav;
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h6 className="sidebar-title">MAIN MENU</h6>

      <NavLink to="/dashboard" className="sidebar-link">
        📊 Dashboard
      </NavLink>

      <NavLink to="/students" className="sidebar-link">
        👨‍🎓 Students
      </NavLink>

      <NavLink to="/add" className="sidebar-link">
        ➕ Add Student
      </NavLink>
    </div>
  );
}

export default Sidebar;
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/students">View Students</Link></li>
        <li><Link to="/add">Add Student</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;


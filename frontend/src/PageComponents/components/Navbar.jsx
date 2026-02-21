import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand">Student Management System</span>
      <button className="btn btn-outline-light" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;

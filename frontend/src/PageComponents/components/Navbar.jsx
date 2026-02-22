import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isLoggedIn && location.pathname !== "/login") {
      navigate("/login");
    }
  }, [location, navigate]);

  const logout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4 shadow-sm">
      <span
        className="navbar-brand fw-bold"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/dashboard")}
      >
        🎓 Student Management
      </span>

      <button className="btn btn-outline-light btn-sm" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
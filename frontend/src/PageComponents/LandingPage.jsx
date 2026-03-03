import { Link } from "react-router-dom";
import "./LandingPage.css";
import { useEffect } from "react";

function LandingPage() {
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/api/students/health/check`);
  }, []);

  return (
  <div className="landing-wrapper">

    {/* Navbar */}
    <nav className="landing-navbar navbar navbar-expand-lg">
      <div className="container">
        <span className="navbar-brand text-white fw-bold">
          🎓 Student Management
        </span>

        <div>
          <Link to="/login" className="btn btn-outline-light btn-sm">
            Admin Login
          </Link>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <div className="container flex-grow-1 d-flex align-items-center py-5">
      <div className="row align-items-center text-center text-md-start w-100">

        {/* Left */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h1 className="hero-title display-5 fw-bold">
            Smart & Efficient Student Management
          </h1>

          <p className="hero-subtitle lead">
            A centralized web application designed to manage student records
            securely and efficiently. Built using modern full-stack
            technologies for scalability and performance.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-4">
            <Link to="/login" className="btn btn-primary btn-lg">
              Get Started
            </Link>

            <a
              href="https://github.com/iakhilrt/student-management-app.git"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              View Source
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="col-12 col-md-6 text-center">
          <div className="feature-card p-4 shadow rounded">
            <h5 className="mb-3">Key Features</h5>
            <ul className="list-unstyled">
              <li className="mb-2">✔ Secure Admin Authentication</li>
              <li className="mb-2">✔ Full CRUD Operations</li>
              <li className="mb-2">✔ Pagination & REST API</li>
              <li className="mb-2">✔ Responsive Dashboard UI</li>
              <li>✔ Built with React & Spring Boot</li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    {/* Footer */}
    <footer className="landing-footer text-center py-3 mt-auto">
      <p className="mb-0">
        Built with React, Spring Boot & MySQL • © {new Date().getFullYear()}
      </p>
    </footer>

  </div>
);
}

export default LandingPage;
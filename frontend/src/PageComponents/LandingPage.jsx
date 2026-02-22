import { Link } from "react-router-dom";
import "./LandingPage.css";
import { useEffect } from "react";

function LandingPage() {

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/api/students/health`);
  }, []);

  return (
    <div className="landing-wrapper">

      {/* Navbar */}
      <nav className="landing-navbar">
        <div className="container d-flex justify-content-between align-items-center">
          <span className="brand">🎓 Student Management</span>
          <Link to="/login" className="btn btn-outline-light btn-sm">
            Admin Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container hero-section">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h1 className="hero-title">
              Smart & Efficient Student Management
            </h1>

            <p className="hero-subtitle">
              A centralized web application designed to manage student records
              securely and efficiently. Built using modern full-stack
              technologies for scalability and performance.
            </p>

            <div className="hero-buttons">
              <Link to="/login" className="btn btn-primary btn-lg me-3">
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

          <div className="col-md-6 text-center">
            <div className="feature-card">
              <h5>Key Features</h5>
              <ul>
                <li>✔ Secure Admin Authentication</li>
                <li>✔ Full CRUD Operations</li>
                <li>✔ Pagination & REST API</li>
                <li>✔ Responsive Dashboard UI</li>
                <li>✔ Built with React & Spring Boot</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="landing-footer">
        <p>
          Built with React, Spring Boot & MySQL • © {new Date().getFullYear()}
        </p>
      </footer>

    </div>
  );
}

export default LandingPage;
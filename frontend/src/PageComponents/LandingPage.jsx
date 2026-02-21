import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {

  const API = import.meta.env.VITE_API_URL;
  
  return (
    <div className="landing-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center landing-card">

            <h1 className="landing-title">
              Student Management System
            </h1>

            <p className="landing-subtitle">
              A centralized web application designed to efficiently manage
              student records within an educational institution. This system
              enables administrators to create, view, update, and maintain
              student information through a secure and user-friendly interface.
            </p>

            <div className="row text-start feature-section">
              <div className="col-md-6">
                <ul className="feature-list">
                  <li>✔ Add and manage student records</li>
                  <li>✔ View detailed student profiles</li>
                  <li>✔ Update academic information</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="feature-list">
                  <li>✔ Secure admin access</li>
                  <li>✔ REST API based architecture</li>
                  <li>✔ Responsive web interface</li>
                </ul>
              </div>
            </div>

            <Link to="/login" className="btn btn-primary btn-lg login-btn">
              Admin Login
            </Link>

            <div className="tech-stack">
              Built using React, Spring Boot, REST APIs, and MySQL
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

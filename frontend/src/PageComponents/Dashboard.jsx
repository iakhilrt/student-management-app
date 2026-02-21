import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./Dashboard.css";

function Dashboard() {

  const API = import.meta.env.VITE_API_URL;

  const [totalStudents, setTotalStudents] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/students?page=0&size=1`)
      .then((res) => res.json())
      .then((data) => {
        setTotalStudents(data.totalItems || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <Sidebar />

        <div className="content">
          <h2 className="mb-4">Admin Dashboard</h2>

          {/* Stats Cards */}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5>Total Students</h5>
                  <h3>{loading ? "..." : totalStudents}</h3>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5>Courses</h5>
                  <h3>Active</h3>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5>System Status</h5>
                  <h3 className="text-success">Online</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">Quick Actions</h5>
              <Link to="/add" className="btn btn-primary me-2">
                Add Student
              </Link>
              <Link to="/students" className="btn btn-secondary">
                View Students
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
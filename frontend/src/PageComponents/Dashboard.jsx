import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  const API = import.meta.env.VITE_API_URL;
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    fetch(`${API}/api/students?page=0&size=1`)
      .then(res => res.json())
      .then(data => setTotalStudents(data.totalItems || 0))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />

        <div className="content">
          <h2 className="mb-4 fw-bold">Admin Dashboard</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="dashboard-card bg-primary text-white">
                <h6>Total Students</h6>
                <h2>{totalStudents}</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div className="dashboard-card bg-success text-white">
                <h6>System Status</h6>
                <h2>Online</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div className="dashboard-card bg-dark text-white">
                <h6>Admin</h6>
                <h2>Active</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
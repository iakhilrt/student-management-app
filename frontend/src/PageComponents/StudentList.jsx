import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./StudentList.css";

function StudentList() {
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch(`${API}/api/students?page=${page}&size=10`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = await res.json();

      setStudents(data.data);
      setTotalPages(data.totalPages);
    };

    fetchStudents();
  }, [page]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    await fetch(`${API}/api/students/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });

    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <Sidebar />

        <div className="content">
          <h2 className="mb-4 fw-bold">Student List</h2>

          <div className="card shadow-sm">
            <div className="card-body">

              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Course</th>
                      <th>Year</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.course}</td>
                        <td>{student.year}</td>
                        <td className="text-center">
                          <div className="d-flex flex-wrap gap-2 justify-content-center">
                            <button
                              className="btn btn-info btn-sm"
                              onClick={() => navigate(`/students/${student.id}`)}
                            >
                              View
                            </button>

                            <button
                              className="btn btn-warning btn-sm"
                              onClick={() => navigate(`/students/edit/${student.id}`)}
                            >
                              Edit
                            </button>

                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDelete(student.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 mt-3">
                <button
                  className="btn btn-secondary"
                  disabled={page === 0}
                  onClick={() => setPage(page - 1)}
                >
                  Previous
                </button>

                <span className="fw-semibold">
                  Page {page + 1} of {totalPages}
                </span>

                <button
                  className="btn btn-secondary"
                  disabled={page + 1 === totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentList;
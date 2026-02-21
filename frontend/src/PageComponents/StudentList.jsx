import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./StudentList.css";

function StudentList() {

  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [reload, setReload] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(
          `${API}/api/students?page=${page}&size=10`
        );
        const result = await response.json();

        setStudents(result.data);
        setTotalPages(result.totalPages);
        

      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, [reload, page]);

  const handleDelete = async (id) => {
    try {
      await fetch(`${API}/api/students/delete/${id}`, {
        method: "DELETE",
      });

      // trigger re-fetch
      setReload(prev => !prev);

    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };




  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <Sidebar />

        <div className="content">
          <h2>Student List</h2>

          <div className="card shadow-sm">
            <div className="card-body">
              <table className="table table-bordered table-hover">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Year</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.course}</td>
                      <td>{student.year}</td>
                      <td>
                        <button
                          className="btn btn-info btn-sm me-2"
                          onClick={() =>
                            navigate(`/students/${student.id}`)
                          }
                        >
                          View
                        </button>

                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() =>
                            navigate(`/students/edit/${student.id}`)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(student.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
              <div className="d-flex justify-content-center mt-3">

                <button
                  className="btn btn-secondary me-2"
                  disabled={page === 0}
                  onClick={() => setPage(page - 1)}
                >
                  Previous
                </button>

                <span className="align-self-center">
                  Page {page + 1} of {totalPages}
                </span>

                <button
                  className="btn btn-secondary ms-2"
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
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./EditStudent.css";

function EditStudent() {

  const API = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    otherCourse: "",
    year: ""
  });

  // 🔥 Fetch student when component loads or id changes
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(
          `${API}/api/students/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch student");
        }

        const result = await response.json();

        // Because backend uses ResponseHandler
        setStudent({
          ...result.data,
          otherCourse: ""
        });

      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    fetchStudent();
  }, [id]);

  // 🔥 Handle input change
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  // 🔥 Handle update submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = {
      name: student.name,
      email: student.email,
      course:
        student.course === "Other"
          ? student.otherCourse
          : student.course,
      year: parseInt(student.year)
    };

    try {
      const response = await fetch(
        `${API}/api/students/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(studentData)
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert(result.message || "Student updated successfully!");
        navigate("/students");
      } else {
        alert("Error: " + (result.message || "Something went wrong"));
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Network error: " + error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <Sidebar />

        <div className="content">
          <h2>Edit Student</h2>

          <div className="card shadow-sm edit-student-card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">Student Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Course */}
                <div className="mb-3">
                  <label className="form-label">Course</label>
                  <select
                    className="form-select"
                    name="course"
                    value={student.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="BTech">BTech</option>
                    <option value="MTech">MTech</option>
                    <option value="MCA">MCA</option>
                    <option value="MBA">MBA</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Other Course */}
                {student.course === "Other" && (
                  <div className="mb-3">
                    <label className="form-label">Specify Course</label>
                    <input
                      type="text"
                      className="form-control"
                      name="otherCourse"
                      value={student.otherCourse}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}

                {/* Year */}
                <div className="mb-4">
                  <label className="form-label">Year</label>
                  <select
                    className="form-select"
                    name="year"
                    value={student.year}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>

                {/* Buttons */}
                <button type="submit" className="btn btn-primary me-2">
                  Update Student
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate("/students")}
                >
                  Cancel
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default EditStudent;
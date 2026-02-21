import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./AddStudent.css";

function AddStudent() {
    const API = import.meta.env.VITE_API_URL;
    const [student, setStudent] = useState({
        name: "",
        email: "",
        course: "",
        otherCourse: "",
        year: ""
    });

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send
    const studentData = {
        name: student.name,
        email: student.email,
        course: student.course === "Other" ? student.otherCourse : student.course,
        year: parseInt(student.year) // Make sure it's a number
    };

    try {
        const response = await fetch(`${API}/api/students/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studentData)
        });

        const result = await response.json();

        if (response.ok) {
            console.log("Server response:", result);
            alert(result.message || "Student added successfully!");
            // Reset form
            setStudent({
                name: "",
                email: "",
                course: "",
                otherCourse: "",
                year: ""
            });
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
                    <h2>Add Student</h2>

                    <div className="card shadow-sm add-student-card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                {/* Student Name */}
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

                                {/* Course Dropdown */}
                                <div className="mb-3">
                                    <label className="form-label">Course</label>
                                    <select
                                        className="form-select"
                                        name="course"
                                        value={
                                            ["BTech", "MTech", "MCA", "MBA"].includes(student.course) ? student.course : student.course ? "Other" : ""}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setStudent({
                                                ...student,
                                                course: value,
                                                otherCourse: value === "Other" ? "" : student.otherCourse
                                            });
                                        }}
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

                                {/* Other Course Input */}
                                {student.course === "Other" && (
                                    <div className="mb-3">
                                        <label className="form-label">Specify Course</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter course name"
                                            value={student.otherCourse}
                                            onChange={(e) =>
                                                setStudent({
                                                    ...student,
                                                    otherCourse: e.target.value,
                                                    course: e.target.value
                                                })
                                            }
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

                                {/* Submit */}
                                <button type="submit" className="btn btn-primary">
                                    Save Student
                                </button>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AddStudent;
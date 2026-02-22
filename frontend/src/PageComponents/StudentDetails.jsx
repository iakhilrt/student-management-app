import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./StudentDetails.css";

function StudentDetails() {

    const API = import.meta.env.VITE_API_URL;
    const { id } = useParams();

    const [student, setStudent] = useState({
        id: "",
        name: "",
        email: "",
        course: "",
        year: ""
    });

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

                setStudent(result.data);  // or result.data

            } catch (error) {
                console.error("Error fetching student:", error);
            }
        };

        fetchStudent();
    }, []);

    return (
        <>
            <Navbar />

            <div className="dashboard-container">
                <Sidebar />

                <div className="content">
                    <h2>Student Details</h2>

                    <div className="card shadow-sm student-detail-card">
                        <div className="card-body">
                            <p><strong>ID:</strong> <span>{student.id}</span></p>
                            <p><strong>Name:</strong> <span>{student.name}</span></p>
                            <p><strong>Email:</strong> <span>{student.email}</span></p>
                            <p><strong>Course:</strong> <span>{student.course}</span></p>
                            <p><strong>Year:</strong> <span>{student.year}</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default StudentDetails;
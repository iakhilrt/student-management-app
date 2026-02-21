import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './PageComponents/LandingPage';
import AdminLogin from './PageComponents/AdminLogin';
import Dashboard from './PageComponents/Dashboard';
import StudentList from './PageComponents/StudentList';
import AddStudent from './PageComponents/AddStudent';
import StudentDetails from './PageComponents/StudentDetails';
import EditStudent from './PageComponents/EditStudent';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/students/edit/:id" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

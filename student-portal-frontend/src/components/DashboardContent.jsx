import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DashboardContent = () => {
    const [student, setStudent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
          try {
            const token = localStorage.getItem('token');
            const res = await axios.get('http://localhost:5000/api/students/dashboardcontent', {
              headers: { 'x-auth-token': token }
            });
            setStudent(res.data);
          } catch (err) {
            localStorage.removeItem('token');
            navigate('/login');
          }
        };
        fetchProfile();
      }, [navigate]);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome back,  {student ? student.name : ""}
👋</h2>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { title: "Enrolled Courses", value: 5 },
          { title: "Pending Assignments", value: 2 },
          { title: "Upcoming Exams", value: 3 },
          { title: "GPA", value: "8.5" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-5 border hover:shadow-lg transition"
          >
            <h3 className="text-gray-500">{item.title}</h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-md border">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <ul className="space-y-3">
          {[
            "Submitted assignment for Data Structures",
            "Registered for Machine Learning course",
            "Viewed marks for Semester 3",
          ].map((activity, idx) => (
            <li
              key={idx}
              className="text-gray-700 border-b last:border-0 pb-2"
            >
              • {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardContent;

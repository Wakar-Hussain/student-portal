import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/students/profile', {
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

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!student) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p className="text-xl font-medium text-gray-700">Loading...</p>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 border-b pb-3">Student Profile</h2>
        
        <div className="space-y-4 text-left">
          <p className="text-lg text-gray-700">
            <strong className="font-semibold text-gray-900 w-20 inline-block">Name:</strong> 
            {student.name}
          </p>
          <p className="text-lg text-gray-700">
            <strong className="font-semibold text-gray-900 w-20 inline-block">Email:</strong> 
            {student.email}
          </p>
        </div>
        
        <button 
          onClick={logout} 
          className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer  duration-200"
        >
          Logout
        </button >
        <button 
        onClick={() => navigate(-1)}
        
        className="mt-8 w-full bg-white border-blue-600 border-2 text-black py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white cursor-pointer transition duration-200">back</button>
      </div>
    </div>
  );
};

export default Profile;
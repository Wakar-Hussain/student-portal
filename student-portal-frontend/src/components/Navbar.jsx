import React from "react";
import { Menu, Bell, MessageSquare, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md py-3 px-6 flex justify-between items-center">
      {/* Left: Logo & Sidebar toggle */}
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold text-blue-600">Student Portal</h1>
      </div>

      {/* Middle: Search bar */}
      <div className="hidden md:flex flex-1 justify-center">
        <input
          type="text"
          placeholder="Search courses, updates..."
          className="w-2/3 px-4 py-2 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Right: Quick actions */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <MessageSquare size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Settings size={20} />
        </button>
        {/* Profile Button */}
        <button
          onClick={() => navigate("/profile")}
          className="p-2 hover:bg-gray-100 rounded-full flex items-center gap-2"
        >
          <User size={20} />
          <span className="hidden sm:inline text-gray-700 font-medium">Profile</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";
import { Home, BookOpen, Calendar, User, Settings, X } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard" },
    { icon: <BookOpen size={20} />, label: "Courses" },
    { icon: <Calendar size={20} />, label: "Schedule" },
    { icon: <User size={20} />, label: "Profile" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-40 z-30 lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r shadow-md transform transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-bold text-blue-600">Menu</h2>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <X size={22} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className="flex items-center gap-3 w-full text-gray-700 hover:bg-blue-100 px-3 py-2 rounded-md"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

import { useState, useEffect } from "react";
import { FiMenu, FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi";

export default function Purchase() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  // Auto collapse on small screens
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      <div className={`bg-gray-900 text-white h-screen p-5 transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
        <button className="mb-5 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu size={24} />
        </button>

        <ul className="space-y-4">
          <NavItem icon={<FiHome />} text="Dashboard" isOpen={isOpen} />
          <NavItem icon={<FiUser />} text="Profile" isOpen={isOpen} />
          <NavItem icon={<FiSettings />} text="Settings" isOpen={isOpen} />
          <NavItem icon={<FiLogOut />} text="Logout" isOpen={isOpen} />
        </ul>
      </div>

      <div className="flex-1 p-5">
        <h1 className="text-xl font-bold">Dashboard Content</h1>
      </div>
    </div>
  );
}

const NavItem = ({ icon, text, isOpen }) => {
  return (
    <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded">
      {icon}
      {isOpen && <span>{text}</span>}
    </li>
  );
};

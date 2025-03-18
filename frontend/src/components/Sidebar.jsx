import { useState } from "react";
import { Menu, X } from "lucide-react";

const Sidebar = ({ isOpen, onClose, onSelect }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[90] md:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile Toggle Button - Positioned below navbar */}
      <button
        className="md:hidden fixed left-2 top-[90px] z-[110]  bg-white rounded-md shadow-md"
        onClick={() => onClose()}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`w-64 bg-[#F8FBFF] text-black flex flex-col fixed md:relative 
        h-[calc(100vh-100px)] z-[95] transition-transform duration-300 transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 top-[100px] md:top-0`}
      >
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-8">
            <SidebarItem title="NativeHub">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSelect("amazon-mini");
                  onClose();
                }}
                className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md px-3 py-2 transition-colors duration-200"
              >
                Amazon-Mini
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSelect("hsbc");
                  onClose();
                }}
                className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md px-3 py-2 transition-colors duration-200"
              >
                HSBC
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSelect("movie");
                  onClose();
                }}
                className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md px-3 py-2 transition-colors duration-200"
              >
                Movie
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSelect("tropicana");
                  onClose();
                }}
                className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md px-3 py-2 transition-colors duration-200"
              >
                Tropicana
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSelect("hyundai");
                  onClose();
                }}
                className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md px-3 py-2 transition-colors duration-200"
              >
                Hyundai
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSelect("royal-enfield");
                  onClose();
                }}
                className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md px-3 py-2 transition-colors duration-200"
              >
                Royal Enfield
              </a>
            </SidebarItem>

            <SidebarItem title="Innovations">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSelect("visionTV");
                  onClose();
                }}
                className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md px-3 py-2 transition-colors duration-200"
              >
                Vision TV
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSelect("audience-X");
                  onClose();
                }}
                className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md px-3 py-2 transition-colors duration-200"
              >
                Audience X
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSelect("nativehub");
                  onClose();
                }}
                className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md px-3 py-2 transition-colors duration-200"
              >
                Native Hub
              </a>
            </SidebarItem>
          </div>
        </nav>
      </div>
    </>
  );
};

const SidebarItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="w-full flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg">{title}</span>
        <svg
          className={`w-4 h-4 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && <div className="mt-2 space-y-1">{children}</div>}
    </div>
  );
};

export default Sidebar;

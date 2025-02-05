import { useState } from "react";

const Sidebar = ({ isOpen, onClose, onSelect }) => {
  return (
    <div
      className={`w-64 bg-[#F8FBFF] text-black flex flex-col transition-transform duration-300 transform 
      ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 fixed md:relative h-full`}
    >
      <nav className="flex-1 p-4">
        <div className="space-y-8">
          <SidebarItem title="AudienceX">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelect("fashion");
              }}
              className="block text-black hover:font-semibold no-underline py-2"
            >
              Fashion
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelect("amazon-mini");
              }}
              className="block text-black hover:font-semibold no-underline py-2"
            >
              Amazon-Mini
            </a>{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelect("hsbc");
              }}
              className="block text-black hover:font-semibold no-underline py-2"
            >
              HSBC
            </a>{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelect("movie");
              }}
              className="block text-black hover:font-semibold no-underline py-2"
            >
              Movie
            </a>{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelect("tropicana");
              }}
              className="block text-black hover:font-semibold no-underline py-2"
            >
              Tropicana
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelect("hyundai");
              }}
              className="block text-black hover:font-semibold no-underline py-2"
            >
              Hyundai
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelect("royal-enfield");
              }}
              className="block text-black hover:font-semibold no-underline py-2"
            >
              Royal Enfield
            </a>
          </SidebarItem>

          <SidebarItem title="VisionTV">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelect("innovation");
              }}
              className="block text-black hover:font-semibold no-underline py-2"
            >
              Innovation
            </a>{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelect("innovation-barcode");
              }}
              className="block text-black hover:font-semibold no-underline py-2"
            >
              Innovation Barcode
            </a>
          </SidebarItem>
        </div>
      </nav>
    </div>
  );
};

const SidebarItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="w-full flex items-center justify-between p-2 text-black hover:bg-[#F8FBFF] rounded"
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

      {isOpen && <div className="mt-2 pl-4 space-y-1">{children}</div>}
    </div>
  );
};

export default Sidebar;

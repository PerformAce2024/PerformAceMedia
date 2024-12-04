import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/PA_Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#F8FBFF] shadow-sm z-50 h-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[100px]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <div className="flex items-center">
                <img src={logo} alt="Logo" />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/about-us"
              className="text-gray-700 hover:text-gray-900 text-lg"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-gray-900 text-lg"
            >
              Services
            </Link>
            <Link
              to="/product"
              className="text-gray-700 hover:text-gray-900 text-lg"
            >
              Product
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-700 hover:text-gray-900 text-lg"
            >
              Contact Us
            </Link>
            <button className="bg-white text-red-500 border-2 border-red-500 px-6 py-3 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300 text-lg">
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-2 pb-3 space-y-2 bg-white">
            <a
              href="#about"
              className="block px-4 py-3 text-gray-700 hover:text-gray-900 text-lg"
            >
              About Us
            </a>
            <a
              href="#services"
              className="block px-4 py-3 text-gray-700 hover:text-gray-900 text-lg"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="block px-4 py-3 text-gray-700 hover:text-gray-900 text-lg"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 text-gray-700 hover:text-gray-900 text-lg"
            >
              Contact Us
            </a>
            <button className="w-full text-left px-4 py-3 text-red-500 hover:text-red-600 text-lg">
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

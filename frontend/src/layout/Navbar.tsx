import { Routes } from "@/types/routetypes";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface NavbarProps {
  routes: Routes[];
}

export default function Navbar({ routes }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isRouteEnabled = (routePath: string) => {
    return (
      routePath === "/" ||
      routePath === "/insightx" ||
      routePath === "/audienceX" ||
      routePath === "/visiontv" ||
      routePath === "/nativehub"
      // routePath === "/paadvance"
    );
  };

  return (
    <>
      <div
        className={`fixed z-20 inset-x-0 top-0 w-full transition-all duration-300 ${
          scrolled || isMenuOpen ? "bg-primary shadow-lg" : ""
        }`}
      >
        <div className="flex justify-between items-center p-4 md:p-5 container mx-auto">
          <Link to="/" className="z-30">
            <img
              src="/logo.png"
              alt="logo"
              className="h-10 md:h-20 w-auto"
            ></img>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 lg:space-x-12">
            {routes.map((route, index) => (
              <div key={index} className="relative group">
                {isRouteEnabled(route.path) ? (
                  <Link
                    to={route.path}
                    className="hover:text-accent text-base text-secondary font-sans font-semibold p-2 transition-colors duration-200"
                  >
                    {route.name}
                  </Link>
                ) : (
                  <span className="text-base text-gray-500 font-sans font-semibold p-2 cursor-not-allowed">
                    {route.name}
                  </span>
                )}
                {!isRouteEnabled(route.path) && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 bg-primary text-secondary text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Coming Soon
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden z-30 relative"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-6 bg-secondary transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-secondary transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "mb-1.5"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-secondary transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-primary z-20 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden pt-24 px-6`}
        >
          <div className="flex flex-col space-y-6">
            {routes.map((route, index) => (
              <div key={index} className="relative">
                {isRouteEnabled(route.path) ? (
                  <Link
                    to={route.path}
                    className="text-secondary text-xl font-sans font-semibold p-2 border-b border-gray-700 hover:text-accent transition-colors duration-200 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {route.name}
                  </Link>
                ) : (
                  <div className="text-gray-500 text-xl font-sans font-semibold p-2 border-b border-gray-700 flex justify-between items-center">
                    <span>{route.name}</span>
                    <span className="text-sm bg-primary px-2 py-1 rounded text-secondary">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

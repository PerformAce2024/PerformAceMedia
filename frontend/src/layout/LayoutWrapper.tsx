import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

interface LayoutWrapperProps {
  children: React.ReactNode;
  routes: { name: string; path: string }[];
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children, routes }) => {
  const location = useLocation();
  const hideNavbarRoutes = ["/privacy-policy"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar routes={routes} />}
      {children}
    </>
  );
};

export default LayoutWrapper;

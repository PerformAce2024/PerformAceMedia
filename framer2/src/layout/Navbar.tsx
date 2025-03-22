import { Routes } from "@/types/routetypes";
import { Link } from "react-router-dom";

interface NavbarProps {
  routes: Routes[];
}
export default function Navbar({ routes }: NavbarProps) {
  return (
    <>
      <div className="flex fixed z-20 inset-x-0 top-0 justify-between p-5 ">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="h-16 w-auto "></img>
        </Link>
        <div className="flex space-x-12">
          {routes.map((route, index) => {
            return (
              <Link
                key={index}
                to={route.path}
                className="hover:text-accent text-base text-secondary font-sans font-semibold p-2"
              >
                {route.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

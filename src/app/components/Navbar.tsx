"use client";
import { Auth } from "@/Utills/Auth";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const isAuth = Auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogout = () => {
    alert("Are you sure to logout?");
    Auth.removeToken();
    window.location.replace("/login");
  };


  useEffect(() => {
   setIsAuthenticated(isAuth);
  }, [isAuth]);

  return (
    <div className="bg-green-500">
      <nav className="container m-auto">
        <div className="flex justify-between items-center h-[70px]">
          <Link href="/" className="text-2xl font-bold text-white">
            Todo app
          </Link>
          <div className="">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            ) : (
              <div className=""></div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

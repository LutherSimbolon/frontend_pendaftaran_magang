import React, { useContext } from "react";
import Logo from "../assets/Logo Diskominfo Jabar.png";
import { IoReorderThreeOutline, IoCloseOutline } from "react-icons/io5";
import { GlobalContext } from "../Context/GlobalContext";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";

const Navbar = ({ onToggleSidebar, isClose }) => {
  const { globalContext } = useContext(GlobalContext);
  const { name } = globalContext;
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.delete("http://localhost:8000/api/logout");
      logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-screen fixed top-0 left-0 z-20  h-24 bg-gradient-to-r from-[#E3F2FD] from-55.97% to-[#BBDEFB] shadow-md shadow[#475d7c]">
      <div className="flex justify-between items-center p-6">
        <button className="block lg:hidden" onClick={onToggleSidebar}>
          {isClose ? (
            <IoCloseOutline size="30px" />
          ) : (
            <IoReorderThreeOutline size="30px" />
          )}
        </button>
        <img className="w-40 h-auto" src={Logo} alt="" />
        <div className="mx-auto"></div>
        <div className="flex flex-between gap-4 items-center">
          <h1 className="hidden md:block text-lg font-roboto font-bold">
            Welcome, {name}
          </h1>
          <button
            onClick={handleLogout}
            className="bg-error px-3 py-2 text-white rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

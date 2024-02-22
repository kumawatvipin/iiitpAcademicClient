import React from "react";
import logo from "../assets/img/logo.png";
import NavbarItem from "../assets/navbarItem.json";
import { Link } from "react-router-dom";
import { Key_Access_Token, getItem } from "../utils/localStorage";
function Navbar() {
  const AA = getItem(Key_Access_Token);
  return (
    <div className="w-full  bg-[#957fec] ">
      <div className="max-w-[1300px] z-50  mx-auto overflow-hidden flex justify-evenly items-center   ">
        <div>
          <a href="#">
            <img src={logo} alt="" width=" 250px" height="200px" />
          </a>
        </div>

        <ul className="flex gap-10 mx-auto items-center mt-2  font-mullish text-deepBlue justify-center text-2xl">
          {NavbarItem?.map(item => {
            return (
              <li>
                <Link
                  to={item.link}
                  className=" hover:underline transition-all duration-500"
                >
                  {item.tag}
                </Link>
              </li>
            );
          })}
        </ul>

        <div>
          {AA ? (
            <Link
              to="/logout"
              className="font-mullish bg-red-500 rounded-xl p-2  hover:bg-red-400 transition-all  duration-300 text-white   text-2xl"
            >
              {" "}
              Logout{" "}
            </Link>
          ) : (
            <ul className="flex gap-10 mx-auto items-center  font-mullish justify-center text-2xl">
              <li>
                <Link
                  to="/signup"
                  className="bg-yellow-500 rounded-sm p-2 hover:bg-yellow-400 transition-all duration-300  text-white"
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="bg-green-500 rounded-sm p-2 hover:bg-green-400 transition-all duration-300  text-white"
                >
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

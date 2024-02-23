import React from "react";
import { Link } from "react-router-dom";
function StudentSignup() {
  return (
    <div className="font-mullish text-white bg-blue-700 h-[550px] gap-4 mt-4 p-3 flex flex-col justify-center items-center mx-auto  max-w-[400px] rounded-md">
      <h1 className=" text-3xl font-bold   "> Student SignUp</h1>
      <form action="" className=" ml-6 ">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Sem" />
        <input type="password" placeholder="Subject" />
        <input type="email" placeholder="Password" />
      </form>
      {/* <div className="terms">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">
          I agree to the <a href="#">Terms & Condition</a>
        </label>
      </div> */}

      <button className="bg-violet-700 rounded-md text-2xl p-1 px-3 text-white hover:bg-blue-600 transition-all duration-200 ">
        Sign Up
      </button>
      <div className="">
        Already have an account?{" "}
        <Link to="/login">
          <span className="bg-blue-700 p-2 m-1 px-2 text-xl rounded-md text-white mb-3 hover:bg-blue-600 transition-all duration-200 ">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
}

export default StudentSignup;

import React from "react";
import { Link } from "react-router-dom";
function StudentLogin() {
  return (
    <div className="container font-mullish text-white bg-blue-700 h-[350px] gap-4 mt-4 p-3 flex flex-col justify-center items-center mx-auto  max-w-[400px] rounded-md">
      <h1 className=" text-3xl font-bold   "> Student Login</h1>
      <form action="" className="ml-6">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {/* <div className="recover">
          <a href="#">Forgot password</a>
        </div> */}
      </form>
      <button className=" hover:bg-blue-600 transition-all duration-200 bg-violet-500 text-2xl rounded-md px-4 py-1 ">
        Login
      </button>
      <div className="text-white mt-6 ">
        Don't have an account?{" "}
        <Link to="/signup">
          <span class="bg-blue-700 p-2 m-1 px-2 text-xl rounded-md text-white mb-3 hover:bg-blue-600 transition-all duration-200 ">
            SignUp
          </span>
        </Link>
      </div>
    </div>
  );
}

export default StudentLogin;

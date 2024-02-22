import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import teacher from "../assets/img/teacher.png";
import student from "../assets/img/student.png";
function Login() {
  const [flag, setFlag] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setFlag(true);
  }, []);
  return (
    <div>
      {flag ? (
        <div className="max-w-[900px] mx-auto justify-center mt-16 items-center font-mullish flex  flex-wrap gap-10 ">
          <div className="w-[335px] h-[335px] bg-yellow-400 flex justify-center items-center rounded-md shadow-lg">
            <div
              onClick={() => {
                setFlag(!flag);
                navigate("/login/teacher");
              }}
              className="border border-green-500 bg-[#8aadea] flex flex-col justify-center items-center cursor-pointer rounded-md w-[320px] h-[320px] p-6 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h1 className="font-bold text-2xl mb-4 text-center text-green-700">
                Login As <span className="text-violet-800">Teacher</span>
              </h1>
              <img src={teacher} alt="" width="120px" />
              <p className="text-lg text-deepBlueHead mb-6 text-center">
                "Educating Today for a Brighter Tomorrow"
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400">
                Login Now
              </button>
            </div>
          </div>

          <div className="w-[335px] h-[335px] bg-green-400 flex justify-center items-center rounded-md shadow-lg">
            <div
              onClick={() => {
                setFlag(!flag);
                navigate("/login/student");
              }}
              className="border border-green-500 bg-[#eca0d7] flex flex-col justify-center items-center cursor-pointer rounded-md w-[320px] h-[320px] p-6 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h1 className="font-bold text-2xl mb-4 text-center text-green-700">
                Login As <span className="text-violet-800">Student</span>
              </h1>
              <img
                src={student}
                alt="Student"
                className="w-24 h-24 mb-6 rounded-full"
              />
              <p className="text-lg text-deepBlueHead mb-6 text-center">
                "Unlock your potential, embrace the journey."
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400">
                Login Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default Login;

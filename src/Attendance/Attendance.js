import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Attendance() {
  const [flag, setFlag] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <div className="max-w-[900px] mx-auto justify-center mt-16 items-center font-mullish flex  flex-wrap gap-10 ">
        <div
          onClick={() => {
            setFlag(!flag);
            navigate("/login/teacher");
          }}
          className="border border-green-500 bg-[#8aadea] flex flex-col justify-center items-center cursor-pointer rounded-md  p-6 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <h1 className="font-bold text-2xl  text-center text-green-700">
            <span className="text-violet-800">Section A</span>
          </h1>
        </div>
        <div
          onClick={() => {
            setFlag(!flag);
            navigate("/login/teacher");
          }}
          className="border border-green-500 bg-[#8aadea] flex flex-col justify-center items-center cursor-pointer rounded-md  p-6 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <h1 className="font-bold text-2xl  text-center text-green-700">
            <span className="text-violet-800">Section B</span>
          </h1>
        </div>

      
      </div>

      <Outlet />
    </div>
  );
}

export default Attendance;

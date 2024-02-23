import React from "react";
import Data from "../Feedback/Sem2/data.json";
import { Link, Outlet } from "react-router-dom";
function Feedback() {
  return (
    <div>
      <div className="flex justify-center mt-6 items-center mx-auto px-5 gap-10 ">
        {Data.map(item => {
          return (
            <Link
              to={`${item?.link}`}
              className="max-w-[200px] rounded-md px-3 py-1 text-xl text-white  bg-pink-700 text-center "
            >
              <h1>{item?.name}</h1>
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default Feedback;

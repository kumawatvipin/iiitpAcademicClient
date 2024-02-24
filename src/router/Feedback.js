import React from "react";
import Data from "../Feedback/Sem2/data.json";
import { Link, Outlet } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
function Feedback() {
  const data = [
    {
      name: "Coverage and depth of the subject was",
      uv: 155,
      Rating: 155,
      amt: 170,
    },
    {
      name: "Value addition towards knowledge & Skill upgradation",
      uv: 170,
      Rating: 111,
      amt: 170,
    },
    {
      name: "In terms of organization, clarity and presentation of the fundamental concepts, the lectures were",
      uv: 170,
      Rating: 143,
      amt: 170,
    },
    {
      name: "Instructors oral presentation in terms of audibility and articulation was",
      uv: 170,
      Rating: 135,
      amt: 170,
    },
    {
      name: "Encouragement given by the instructor to think and reason,logically and objectively",
      uv: 170,
      Rating: 160,
      amt: 170,
    },
    {
      name: "The avalability and approachability of the Instructors outside the class was",
      uv: 170,
      Rating: 140,
      amt: 170,
    },
    {
      name: " Examination were of appropriate level / length",
      uv: 150,
      Rating: 150,
      amt: 130,
    },
    {
      name: " The marks given were fair and transparent",
      uv: 120,
      Rating: 130,
      amt: 120,
    },
    {
      name: "Overall Rating ",
      uv: 170,
      Rating: 170,
      amt: 170,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };
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

      <div className="flex mt-10 justify-center  items-center mx-auto">
        <BarChart
          width={650}
          height={420}
          data={data}
          margin={{
            top: 5,
            right: 40,
            left: 20,
            bottom: 5,
          }}
          className="text-white text-xl"
        >
          <CartesianGrid   strokeDasharray="3 3" />
          <XAxis stroke="#8884d8" dataKey="name" />
          <YAxis />
          <Tooltip
            content={<CustomTooltip />}
            style={{   backgroundColor: "gold"  }}
          />

          <Legend />
          <Bar dataKey="Rating" barSize={25} fill="green" />
        </BarChart>
      </div>
    </div>
  );
}

export default Feedback;

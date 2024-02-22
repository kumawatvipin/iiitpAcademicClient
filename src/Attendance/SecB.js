import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { TeacherSubject, getItem } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
function SecA() {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(true);

  const subject = getItem(TeacherSubject);
  const BB = () => {
    setTimeout(() => {
      setFlag(false);
      navigate("/login");
    }, 1000);
  };
  if (subject == null) {
    BB();
  }
  const [data, setData] = useState([{}]);
  const [cnt, setcnt] = useState(0);
  const [present, setPresent] = useState([false]);
  const AA = async () => {
    try {
      const user = await axiosClient.post(`attendance/${subject}`, {
        sec: "B",
      });
      setData(user?.result?.secB || [{}]);
    } catch (error) {}
    // console.log(user);
    // console.log(user.result.secA);
  };
  useEffect(() => {
    {
      if (flag) {
        AA();
      }
    }
  }, []);

  return (
    <>
      {flag ? (
        <div className="flex bg-white flex-col gap-2 pl-10 mt-4 border-spacing-2 border-2 p-4 ">
          <div className="w-[100%] flex gap-2 bg-green-500 p-2 py-3 rounded-sm mb-3 ">
            <h1 className="w-[100px]">MIS</h1>
            <h1 className="w-[300px]">Name</h1>
            <h1 className="w-[100px]">Today</h1>
            <h1 className="w-[100px]">Absent</h1>
            <h1 className="w-[100px]">Present</h1>
            <h1 className="w-[100px]">Percentage</h1>
            <h1 className="w-[100px]">TotalClass</h1>
          </div>

          <div>
            {data?.map((item, index) => {
              if (index === 0) {
                return "";
              }

              return (
                <>
                  <hr
                    style={{ color: "black", width: "100%", height: "2px" }}
                  />
                  <div className="flex gap-2 py-2  items-center ">
                    <h1 className="w-[100px]">{item?.MIS}</h1>
                    <h1 className="w-[300px]">{item?.name}</h1>
                    <h1 className="w-[120px]">
                      <button
                        className={` ${
                          present[index] ? " bg-green-400" : "bg-red-500"
                        }   w-[50px] py-1 rounded-md `}
                        onClick={() => {
                          present[index] = !present[index];
                          setcnt(!cnt);
                          // console.log(cnt);
                          item.current = !item.current;
                        }}
                      >
                        {item?.current ? "P" : "A"}
                      </button>
                    </h1>

                    <h1 className="w-[100px]">{item?.currentAbsent}</h1>
                    <h1 className="w-[100px]">{item?.currentPresent}</h1>
                    <h1 className="w-[100px]">{item?.currentPercentage}</h1>
                    <h1 className="w-[100px]">{item?.totalClass}</h1>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default SecA;

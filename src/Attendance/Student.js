import React, { useEffect, useState } from "react";
import sem2 from "../assets/student/2sem.json";
import sem4 from "../assets/student/4sem.json";
import sem6 from "../assets/student/6sem.json";
import { getItem, StudentSem, StudentMIS } from "../utils/localStorage";
import { axiosClient } from "../utils/axiosClient";
import { PieChart, Pie, Cell } from 'recharts';
function Student() {
  const [data, setData] = useState([]);
  const [sub, setSub] = useState("");

  const [absent,setAbsent]=useState(0);
  const [present,setPrsent]=useState(0);
  const [percentage,setPercentage]=useState(0);
  const currentSem = getItem(StudentSem);
  const mis = getItem(StudentMIS);

  useEffect(() => {
    if (currentSem == 2) {
      setData(sem2);
    }
    if (currentSem == 4) {
      setData(sem4);
    }
    if (currentSem == 6) {
      setData(sem6);
    }
  }, []);

  const [Attendance, setAttendance] = useState([]);

  async function handleSubmit(e,subject) {
    e.preventDefault();
    try {
        
          // const result = await axiosClient.post(`/attendance/student/dsa`, {
          const result = await axiosClient.post(`/attendance/student/${subject}`, {
        mis,
      });
      // console.log(result.result.student[0]);
      setAttendance(result?.result?.student[0]);
      setPercentage(Attendance.currentPercentage);
      setAbsent(Attendance.currentAbsent.toFixed());
      setPrsent((Attendance.currentPresent.present.toFixed()));
      
    } catch (err) {}
  }

  const ChartData = [
    { name: 'B', value: 25, color: '#00ff00' },
    { name: 'A', value: 30, color: '#ff0000' },
  // { name: 'B', value: {presnt}, color: '#00ff00' },
  // { name: 'A', value: {absent}, color: '#ff0000' },
  
];


  return (
    <>
      <div className="mx-auto max-w-[1400px] text-center text-white flex flex-wrap gap-6 justify-center items-center mt-4">
        {data.map(item => {
          return (
            <div
              onClick={e => {
                setSub(item.name);
                const subject=item.link;
                handleSubmit(e,subject);
              }}
              className="bg-yellow-800 cursor-pointer hover:bg-yellow-700 hover:scale-110  transition-all duration-300 p-1 px-3 rounded-lg text-xl text-center "
            >
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>


      
    
      <div>
        {
          <div className="bg-gray-700 text-white w-[300px] h-[200px] p-3 mx-auto flex flex-col items-center mt-16">

            <h1> Percentage ={Attendance.currentPercentage} %</h1>
            <h1> Present ={Attendance.currentPresent} %</h1>
            <h1> Absent ={Attendance.currentAbsent} %</h1>
            <h1> TotalClass ={Attendance.totalClass} %</h1>

            <h1>Name = {Attendance.name}</h1>
            <h1>Subject = {sub}</h1>
          </div>
        }
      </div>
    </>
  );
}

export default Student;




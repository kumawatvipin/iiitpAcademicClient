import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { Key_Access_Token, getItem } from "./utils/localStorage";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import TeacherSignup from "./router/TeacherSignup";
import TeacherLogin from "./router/TeacherLogin";
import Show from "./Attendance/Show";
import Anni from "./Anni";
import Chart from "./Attendance/Chart";
import { Route, Routes } from "react-router-dom";
import Home from "./router/Home";
export const TOAST_SUCCESS = "toast_success";
export const TOAST_ERROR = "toast_error";

function App() {
  const isLoading = useSelector(state => state.appConfigReducer.isloading);
  const toastData = useSelector(state => state.appConfigReducer.toastData);
  const loadingRef = useRef(null);
  useEffect(() => {
    if (isLoading) {
      loadingRef.current?.continuousStart();
    } else {
      loadingRef.current?.complete();
    }
  }, [isLoading]);
  useEffect(() => {
    switch (toastData.type) {
      case TOAST_SUCCESS:
        toast.success(toastData.message);
        break;
      case TOAST_ERROR:
        toast.error(toastData.message);

        break;
    }
  }, [toastData]);
  return (
    <div className="App">
      <LoadingBar color="#f11946" ref={loadingRef} />
      <div>
        <Toaster />
      </div>

      {/* <TeacherLogin /> */}
      {/* <TeacherSignup /> */}

      {/* <Anni /> */}
      {/* <Show /> */}
      {/* <Chart/> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/teacherSignup" element={<TeacherSignup />}></Route>
        <Route path="/teacherlogin" element={<TeacherLogin />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;

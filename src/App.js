import toast, { Toaster } from "react-hot-toast";
import { Key_Access_Token, getItem } from "./utils/localStorage";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import TeacherSignup from "./Teacher/TeacherSignup";
import TeacherLogin from "./Teacher/TeacherLogin";
import StudentSignup from "./Student/StudentSignup";
import StudentLogin from "./Student/StudentLogin";
import Show from "./Attendance/Show";
import Anni from "./Annimation/Anni";
import Chart from "./Attendance/Chart";
import { Route, Routes } from "react-router-dom";
import Home from "./router/Home";
import Navbar from "./router/Navbar";
import Attendance from "./Attendance/Attendance";
import Budget from "./router/Budget";
import Feedback from "./router/Feedback";
import Logout from "./router/Logout";
import Login from "./router/Login";
import Signup from "./router/Signup";
import SecA from './Attendance/SecA'
import SecB from './Attendance/SecB'
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />}>
          <Route path="teacher" element={<TeacherLogin />} />
          <Route path="student" element={<StudentLogin />} />
        </Route>

        <Route path="/signup" element={<Signup />}>
          <Route path="teacher" element={<TeacherSignup />} />

          <Route path="student" element={<StudentSignup />} />
        </Route>
        
        <Route path="/attendance" element={<Attendance />}>
               <Route path="secA" element={<SecA/>}  />
               <Route path="secB" element={<SecB/>}  />
        </Route>
        
        <Route path="/logout" element={<Logout />} />
        
        <Route path="/budgets" element={<Budget />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;

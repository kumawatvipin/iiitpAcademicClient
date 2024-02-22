import React, { useState } from "react";
import { Checkbox, Form, Input } from "antd";

import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../utils/axiosClient";
import {
  Key_Access_Token,
  TeacherSubject,
  count_User,
  setItem,
  getItem,
} from "../utils/localStorage";
import { useDispatch } from "react-redux";
import { setcount, showToast } from "../slice/appConfigSlice";
import { TOAST_ERROR, TOAST_SUCCESS } from "../App";
// import {  TeacherSubject, getItem } from "../utils/localStorage";
function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [subject, setSubject] = useState("");
  //   const [subject, setpassword] = useState("");

  //   if(subject==null ){
  //     navigate('/signup')
  //   }
  //   console.log("subject" + subject);
  const dispatch = useDispatch();
  // const [count, setcount1] = useState(0);
  async function submitHandle(e) {
    e.preventDefault();

    try {
      const result = await axiosClient.post("/teacher/login", {
        email,
        password,
        subject,
      });
      // console.log(result);
      setItem(TeacherSubject, result.result.subject);
      setItem(Key_Access_Token, result.result.token);
      // console.log(getItem(TeacherSubject));
      dispatch(
        showToast({
          type: TOAST_SUCCESS,
          message: "Successfully Login",
        })
      );
      if (result) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  }

  // useEffect(() => {
  //   countU();
  // }, []);
  return (
    <div class="grid  mx-auto  items-center ">
      <div class="flex  flex-col justify-center items-center mx-auto h-[420px] mb-5 lg:h-[400px] lg:p-10 p-6  border-2 max-w-[600px] rounded-lg mt-11  border-green-400">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              class=""
              placeholder="email"
              onChange={e => setemail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="subject"
            name="subject"
            rules={[
              {
                required: true,
                message: "Please input subject",
              },
            ]}
          >
            <Input
              class=""
              placeholder="email"
              onChange={e => setSubject(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="password"
              onChange={e => setpassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 1,
            }}
          >
            <button
              class="bg-blue-700 rounded-md text-lg p-1 px-3 text-white hover:bg-blue-600 transition-all duration-200  "
              onClick={submitHandle}
            >
              Login
            </button>
          </Form.Item>
        </Form>
        {/* <Link to="/auth/forpass">
          <h1 class="m-1 p-2  ">
             Forget Password
          </h1>
        </Link> */}
        <h1 class="m-1 p-2 ">
          Do not have account{" "}
          <Link
            to="/signup"
            class="bg-blue-700 p-2 m-1 px-2 text-xl rounded-md text-white mb-3 hover:bg-blue-600 transition-all duration-200 "
          >
            SignUp
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Login;

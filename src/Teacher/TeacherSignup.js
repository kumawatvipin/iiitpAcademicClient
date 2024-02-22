import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showToast } from "../slice/appConfigSlice";
import { TOAST_ERROR, TOAST_SUCCESS } from "../App";
import {
  Key_Access_Token,
  TeacherSem,
  TeacherSubject,
  setItem,
} from "../utils/localStorage";

function TeacherSignup() {
  console.log("TeacherSignup rendered");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [subject, setSubject] = useState("");
  const [sem, setSem] = useState("");
  const [password, setpassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    try {
      const result = await axiosClient.post("/teacher/signup", {
        email,
        password,
        name,
        subject,
        sem,
      });
      setItem(TeacherSubject, subject);
      setItem(TeacherSem, sem);
      setItem(Key_Access_Token, result.result.token);
      console.log(result);

      setTimeout(() => {
        dispatch(
          showToast({
            type: TOAST_SUCCESS,
            message: "Now Login",
          })
        );
      }, 1000);
      if (result) {
        //
        navigate("/teacherLogin");
      }
    } catch (err) {
      console.log(err);
    }
    // console.log('vipin');
  }
  // console.log(error);

  return (
    <div class="grid items-center mx-auto ">
      <div class="flex flex-col z-50 p-15 mx-3 mt-10 max-h-[700px] justify-center items-center sm:mx-auto sm:h-[450px] sm:p-10  border-2 sm:max-w-[600px] mb-5 rounded-lg sm:mt-2  border-green-400">
        <h1 class="text-xl hidden sm:block  p-2 m-3 text-red-500">
          SignUp for accessing website
        </h1>
        <Form
          onSubmit={handleSignup}
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
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input
              placeholder="vipin"
              onChange={e => setname(e.target.value)}
            />
          </Form.Item>

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
              type="email"
              placeholder="vipin...6@gmail.com"
              onChange={e => setemail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="sem"
            name="sem"
            rules={[
              {
                required: true,
                message: "Please input sem!",
              },
            ]}
          >
            <Input
              class=""
              type="sem"
              placeholder="1"
              onChange={e => setSem(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="subject"
            name="subject"
            rules={[
              {
                required: true,
                message: "Please input your subject!",
              },
            ]}
          >
            <Input
              class=""
              type="subject"
              placeholder="ABC"
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
              class="bg-blue-500 w-[100px] text-white rounded-md text-lg hover:bg-blue-600 transition-all duration-200 p-1 "
              onClick={handleSignup}
            >
              Sign-Up
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default TeacherSignup;

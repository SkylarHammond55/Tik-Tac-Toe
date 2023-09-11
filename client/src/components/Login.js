import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

function Login({ setIsAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const cookies = new Cookies();
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username,
      password,
    }).then((res) => {
      const { firstName, lastName, username, token, userId } = res.data;
      cookies.set("token", token);
      cookies.set("userId", userId);
      cookies.set("username", username);
      cookies.set("firstName", firstName);
      cookies.set("lastName", lastName);
      setIsAuth(true);
    });
  };
  return (
    <div className="max-w-2xl mx-auto">
      <div className="max-w-sm p-4 sm:p-6 lg:p-8 ">
        <form className="space-y-6" action="#">
        <div class="flex justify-center">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Login</h3>
      </div>

          <div>
            <label htmlFor="username" className="text-sm font-medium dark:text-gray-900 block mb-2 dark:text-gray-300">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="johndoe"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium dark:text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="text-sm ml-3">
                <label htmlFor="remember" className="font-medium dark:text-gray-900 dark:text-gray-300">Remember me</label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full dark:text-gray-900 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={login}
          >
            Login to your account
          </button>

          
        </form>
      </div>
    </div>
  );
}

export default Login;

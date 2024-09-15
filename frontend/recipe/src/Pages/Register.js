import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/register/", {
        firstName,
        lastName,
        password,
        email,
        group,
      });
      console.log("Registration successful:", response.data);
      navigate("/");
    } catch (error) {
      console.error("There was an error registering!", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 py-10">
      <img
        src={
          "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="Register-Food-Image"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 flex flex-col justify-center w-full max-w-4xl p-10 bg-gray-800 bg-opacity-75 rounded-lg shadow-lg mt-[40px]">
        <h1 className="mb-6 text-3xl font-bold text-white">Register</h1>
        <p className="mb-6 text-white">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="firstname" className="mb-2 text-white">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="p-2 mb-4 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="lastname" className="mb-2 text-white">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="p-2 mb-4 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <label htmlFor="email" className="mb-2 text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 mb-4 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="mb-2 text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="p-2 mb-4 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirm-password" className="mb-2 text-white">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            className="p-2 mb-4 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="group" className="mb-2 text-white">
            Group
          </label>
          <select
            id="group"
            name="group"
            className="p-2 mb-4 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          >
            <option value="">Select a group</option>
            <option value="cook">Cook</option>
            <option value="user">User</option>
            <option value="planner">Planner</option>
          </select>

          <button
            type="submit"
            className="p-2 mb-6 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
        <p className="mb-4 text-center text-white">or register with</p>
        <div className="flex space-x-2">
          <button className="flex items-center justify-center w-1/2 p-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
            <i className="mr-2 fab fa-facebook-f"></i> Facebook
          </button>
          <button className="flex items-center justify-center w-1/2 p-2 text-white bg-red-500 rounded hover:bg-red-600 transition duration-300">
            <i className="mr-2 fab fa-google"></i> Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { useState, useEffect } from "react";
import { TextField, Avatar } from "@mui/material";
import Validation from "./Validation.js";
import Login from "./login.jpeg";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios";

export default function New() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    alert("HIIIII...Welcome");
  }, []);
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log("Form submitted", formData);
    setErrors(Validation(formData));

    if (Object.keys(Validation).length === 0) {
      try {
        const response = await axios.post("http://localhost:3000/login", {
          id: 1,
          username: formData.email,
          password: formData.password,
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="flex items-center justify-center ">
          <img src={Login} alt="Login" className="h-screen w-screen" />
        </div>
        <div className="flex flex-col items-center justify-center bg-white p-8">
          <Player
            src="https://lottie.host/9865efe7-31f4-4e29-9edb-6c7d53fb1c4f/PhNnuxEfAS.json"
            speed={1}
            autoplay
            loop
            className="player"
            style={{ height: "180px", width: "180px" }}
          />
          <h3 className="text-4xl text-neutral-600 font-sans mb-8 mt-2 ">
            Login form
          </h3>
          <TextField
            label="Enter the Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            variant="outlined"
            sx={{ width: "60%" }}
            required
          />
          {errors.email && <p style={{ color: "red" }}>*{errors.email}</p>}
          <TextField
            label="Enter the Password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            variant="outlined"
            type="password"
            sx={{ mt: 3, width: "60%" }}
            required
          />
          {errors.password && (
            <p style={{ color: "red" }}>*{errors.password}</p>
          )}
          <Link
            to="/signup"
            className="mt-2 text-xl underline underline-offset-8"
          >
            Sign Up
          </Link>
          <button
            onClick={handleSubmit}
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg w-80"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

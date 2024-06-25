import React, { useState } from "react";
import { TextField, Avatar } from "@mui/material";
import { Player } from '@lottiefiles/react-lottie-player';
import Signup from "./signup.png"
import Validation from "./Validation.js";

export default function SignUp() {
  const [formData,setFormData]=useState({name:"",email:"",password:"",cpassword:""})
  const [errors,setErrors]=useState({});



  const handleChange=(evt)=>{
    setFormData({...formData,[evt.target.name]:evt.target.value})
  }
  const handleSubmit=(evt)=>{
    evt.preventDefault()
    console.log("Form submitted",formData)
    setErrors(Validation(formData));
  }


  return (
    <>
      <div className="grid grid-cols-2 h-screen bg-cyan-50  ">
        <div className="mt-36 ml-32 text-8xl font-serif font-bold drop-shadow-4xl><p ">
            <p>Let's</p>
            <p className="text-blue-600 mt-0">make it</p>
            <p>together...</p><br/>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg rounded-2xl m-10 bg-slate-50">
           <div >
              <img src={Signup} className="h-36 w-44"></img>
          </div>
  
            
          <TextField
            label="Enter the name "
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            size="small"
            sx={{ width: '60%', mt:3}}
            required          
          />
           {errors.name && <p style={{ color: "red" }}>*{errors.name}</p>}

          <TextField
            label="Enter the email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            type="email"
            size="small"
            sx={{ mt: 3, width: '60%',}}
            required
          />
           {errors.email && <p style={{ color: "red" }}>*{errors.email}</p>}
             <TextField
            label="Enter the password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            type="password"
            size="small"
            sx={{ mt: 4, width: '60%' }}
            required
          />
          {errors.password && <p style={{ color: "red" }}>*{errors.password}</p>}
          
          <TextField
            label="Confirm password"
            value={formData.cpassword}
            onChange={handleChange}
            name="cpassword"
            variant="outlined"
            type="password"
            size="small"
            sx={{ mt:3, width: '60%' }}
            required
          />
          {errors.cpassword && <p style={{ color: "red" }}>*{errors.cpassword}</p>}
          
           <button
            onClick={handleSubmit}
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg w-80">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

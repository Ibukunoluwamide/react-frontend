import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const SignIn = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
  
    const submitBtn = () => {
      const newUser = {
        email: email,
        password: password,
      };
      axios.post('http://localhost:3000/user/signin',newUser)
      .then((result) => {
        console.log(result);
        if (result.data.status==true) {
          toast.success(result.data.message)
          localStorage.token = result.data.token
          setTimeout(()=>{navigate("/dashboard")},2000)
        }else{
          toast.error(result.data.message)

        }
      }).catch((err) => {
        console.log(err);
      });
    
    };
  
    const labelStyle = {
      fontSize: "1.2rem", 
      fontWeight: "bold", 
      marginBottom: "10px"
    }; 
  return (
    <>
         <form className="col-lg-4 m-auto shadow-lg p-3 bg-white mt-5">
          <h2 className="text-center">SIGN IN</h2>
          <div className="mb-3">
            <label htmlFor="email" style={labelStyle}>
              Email Address
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" style={labelStyle}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-info text-white col-12" onClick={submitBtn}>
            Submit
          </button>
        </form>
    </>
  )
}

export default SignIn
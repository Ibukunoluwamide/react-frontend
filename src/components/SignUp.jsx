import axios from "axios";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [users, setUsers] = useState([]);
   const navigate = useNavigate()
  const submitBtn = () => {
    const newUser = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
    };
    // setUsers([...users, newUser]);
    // console.log(users);
    
    axios.post('http://localhost:3000/user/signup',newUser)
    .then((result) => {
      console.log(result);
      if (result.data.status==true) {
        toast.success(result.data.message)
        setTimeout(()=>{navigate("/signin")},2000)
      }else{
        toast.error(result.data.message)
      }
    }).catch((err) => {
      console.log(err);
    });
    // navigate('/signin')
    // setFirstname("")
    // setLastname("")
    // setEmail("")
    // setPassword("")
  };
  const labelStyle = {
    fontSize: "1.2rem", 
    fontWeight: "bold", 
    marginBottom: "10px"
  };
  // const getData = ()=>{
  //     axios.get('http://localhost:3000/user/welcome')
  //   .then((result) => {
  //     console.log(result);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }

  return (
    <>
    {/* <button onClick={getData}>Get Data From Backend</button> */}
      <div className="row mt-3 container-fluid m-auto">
        <form className="col-lg-4 m-auto shadow-lg p-3 bg-white">
          <h2 className="text-center">SIGN UP</h2>
          <div className="mb-3">
            <label htmlFor="firstname" style={labelStyle}>
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="First name"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" style={labelStyle}>
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Last name"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" style={labelStyle}>
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Email"
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
          <button type="button" className="btn btn-success col-12" onClick={submitBtn}>
            Submit
          </button>
        </form>
      </div>

    </>
  );
};

export default Signup;

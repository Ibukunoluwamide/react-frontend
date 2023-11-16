import React, { useState } from "react";

const SignPage = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const submitBtn = () => {
      const newUser = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
      };
      setUsers([...users, newUser]);
      console.log(users);
      // navigate('/signin')
      setFirstname("")
      setLastname("")
      setEmail("")
      setPassword("")
    };
    const labelStyle = {
      fontSize: "1.2rem", 
      fontWeight: "bold", 
      marginBottom: "10px"
    };
  
    const deleteBtn =(id)=>{
        console.log(id);
        console.log(users);
        let allnewUsers = [...users]
    allnewUsers.splice(id,1)
    console.log(allnewUsers);
    setUsers(allnewUsers)
    }
  
    return (
      <>
        <div className="row mt-5 container-fluid m-auto">
         <div className="col-lg-6">
         <form className="shadow-lg p-3 bg-white">
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
         <div className="col-lg-6">
            <table className="table table-info table-striped table-hover">
                <thead>
                    <tr>
                    <th>S/N</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Address</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && (
                            users.map((user,id)=>(
                     <tr key={id}>
                        <td>{id+1}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td className="d-flex gap-2">
                            <button  className="btn btn-warning">Edit</button>
                            <button onClick={()=>deleteBtn(id)}  className="btn btn-danger">Delete</button>
                        </td>
                     </tr>

                            ))

                        )
                    }
                </tbody>
            </table>
         </div>
        </div>
  
      </>
    )
}

export default SignPage
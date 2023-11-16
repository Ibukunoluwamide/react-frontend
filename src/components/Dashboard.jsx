import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('hhttps://node-backend-az50.onrender.com/user/dashboard', {
      headers: {
              Authorization: `Bearer ${localStorage.token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              
            }
    })
    .then((result) => {
       console.log(result.data)
       if (result.data.status==true) {
         console.log(result.data.message)
       }else{
         console.log(result.data.message)
         navigate('/signin')
       }
    }).catch((err) => {
      
    });
  }, [])
  
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard

import { Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import SignUp from './components/Signup'
import Home from './page/Home'
import SignPage from './signpage/SignPage';

function App() {
  const token = localStorage.token
  return (
    <>
    <Navbar/> <br />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/dashboard' element={token?<Dashboard/>:<Navigate to="/signin"/>}/>
      <Route path='/signpage' element={<SignPage/>}/>
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App

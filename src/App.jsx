import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { setLogIn } from "./Redux/temp/test"
import Login from './pages/Login'
import Register from './pages/Register'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import useStore from './store'
function App() {
  const islogin = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [pg, setpg] = useState(0)
  const theme=useStore(state=>state.theme);
  return (
    <div className={theme}>
      {/* <div className='h-screen overflow-y-auto custom-scrollbar bg-gradient-to-r from-bordercolor1 to-bordercolor2'> */}
      <div className='h-screen overflow-y-auto custom-scrollbar bg-lightgrey dark:bg-darkbg0'>
        {/* <nav className='h-[8vh] shadow-md flex items-center justify-between bg-white'>
          <img src='MTLogo.png' className='h-2/4 m-3 ' alt="Logo" />
          <div>
          </div>
        </nav> */}
        <div className=' fixed top-0 z-20 w-full'>
        <Navbar />
        </div>
        <div className='mt-[8vh] min-h-[100vh]'>
        <Outlet />

        </div>
        {/* <Login /> */}
        {/* {pg==0?<Register />:<Login />} */}
      </div>
    </div>
  )
}

export default App

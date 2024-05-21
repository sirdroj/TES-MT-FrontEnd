import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SideNav = ({selectedLi,setSelectedLi}) => {
    const navigate = useNavigate();
  return (
    <nav className='  fixed bg-darkBluesidenavgrey  h-[92vh] flex justify-lrft py-4 z-10 '>
                <div className='h-full w-full relative transition-width duration-300'>
                    <ul className='w-full'>
                        <li className={`p-2  w-full border-white border-opacity-20  ${selectedLi == "dashboard" ? "bg-gray-600" : "m-[1px] hover:border-[1px] hover:m-0 "} `} onClick={() => { setSelectedLi("dashboard") }} >
                            <Link className='flex align-bottom' to={"dashboard"}>
                                <img src='./icons/Dashboard.svg' className=' w-8 h-7' />
                                <span className='text-white mx-2 align-bottom mt-1 lg:block hidden'>Dashboard</span>

                            </Link>
                        </li>
                        <li className={`p-2  w-full border-white border-opacity-20 ${selectedLi == "clientportfolio" ? "bg-gray-600" : " m-[1px] hover:border-[1px] hover:m-0 "} `} onClick={() => { setSelectedLi("clientportfolio") }} >
                            <Link className='flex align-bottom' to={"clientportfolio"}>
                                <img src='./icons/portfolio.svg' className=' w-8 h-7' />
                                <span className='text-white mx-2 align-bottom mt-1 lg:block hidden'>Client portfolio</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className=' absolute bottom-0 w-full'>

                        
                        <li className=' w-full p-2  m-[1px] hover:border-[1px] hover:m-0  border-gray-500'>
                            <Link onClick={() => {
                                localStorage.clear();
                                sessionStorage.clear();
                                alert("logged out");
                                navigate("/login");
                            }} 
                            className='flex items-center'
                            >
                                <img src='./icons/logout.svg' className=' w-8 h-7' />
                                <span className='lg:block hidden text-white mx-2 w-max'>log out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
  )
}

export default SideNav
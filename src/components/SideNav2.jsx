import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SideNav2 = ({ selectedLi, setSelectedLi }) => {
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <nav className={`fixed bg-darkBluesidenav h-[92vh] flex py-4 z-10 transition-width duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
            <div className='h-full w-full relative'>
                <ul className='w-full'>
                    <li className={`p-2 w-full border-white border-opacity-20 ${selectedLi == "dashboard" ? "bg-darkBluesidenavHighlight" : "m-[2px] hover:border-[2px] hover:m-0 "} `} onClick={() => { setSelectedLi("dashboard") }}>
                        <Link className='flex items-center' to={"dashboard"}>
                            <img src='./icons/home.svg' className='w-8 h-7' />
                            <span className={`text-white mx-2 mt-1 ${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
                        </Link>
                    </li>
                    <li className={`p-2 w-full border-white border-opacity-20 ${selectedLi == "clientportfolio" ? "bg-darkBluesidenavHighlight" : "hover:border-[2px] m-[2px] hover:m-0"} `} onClick={() => { setSelectedLi("clientportfolio") }}>
                        <Link className='flex items-center' to={"clientportfolio"}>
                            <img src='./icons/adduser.svg' className='w-8 h-7' />
                            <span className={`text-white mx-2 mt-1 ${isCollapsed ? 'hidden' : 'block'}`}>Client portfolio</span>
                        </Link>
                    </li>
                </ul>
                <ul className='absolute bottom-0 w-full'>
                    <li className='w-full p-2 my-2 hover:border-[2px] hover:p-[6px]'>
                        <Link className='flex items-center'>
                            <img src='./icons/settings.svg' className='w-8 h-7' />
                            <span className={`text-white mx-2 mt-1 ${isCollapsed ? 'hidden' : 'block'}`}>Settings</span>
                        </Link>
                    </li>
                    <li className='w-full p-2 my-2 hover:border-[2px] hover:p-[6px]'>
                        <Link
                            onClick={() => {
                                localStorage.clear();
                                sessionStorage.clear();
                                alert("Logged out");
                                navigate("/login");
                            }}
                            className='flex items-center'
                        >
                            <img src='./icons/On_button.png' className='w-7 h-7' />
                            <span className={`text-white mx-2 mt-1 ${isCollapsed ? 'hidden' : 'block'}`}>Log out</span>
                        </Link>
                    </li>
                    <button
                        onClick={toggleCollapse}
                        className='absolute bottom-0 w-full p-2 bg-gray-700 text-white'
                    >
                        {isCollapsed ? 'Expand' : 'Collapse'}
                    </button>
                </ul>
            </div>
        </nav>
    );
}

export default SideNav2;

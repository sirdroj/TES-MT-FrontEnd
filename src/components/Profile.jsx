import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useStore from '../store';

const getInitials = (str) => {
  const words = str.split(' ');

  const firstInitial = words[0].charAt(0).toUpperCase();
  if (words.length < 2) {
    return firstInitial;
  }
  const secondInitial = words[1].charAt(0).toUpperCase();

  return firstInitial + secondInitial;
}

const Profile = () => {
  const userName = useStore(state => state.userName);
  const setUserName = useStore(state => state.setUserName);
  const theme = useStore(state => state.theme);
  const setTheme = useStore(state => state.setTheme);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${theme} `} ref={dropdownRef}>
      <div className='p-2 px-4 border-[1px] rounded-lg flex items-center cursor-default' onClick={() => setShowDropdown(!showDropdown)}>
        <img src='/icons/userprofile.svg' className='mr-1' />
        {userName}
      </div>
      <div className={`${showDropdown ? "fixed" : "hidden"} border-[1px] ${theme == "dark" ? "bg-gray-500 text-white" : "bg-white"}  p-2 right-[2rem] top-14 w-[250px] px-4 shadow-sm rounded-md`}>
        <div className='p-2'>
          <span className='bg-gray-400 text-center relative px-2 py-1 rounded-full'>{getInitials(userName)}</span>
          <span className='mx-2'>{userName}</span>
        </div>
        <ul className='mt-2'>
          <li className='w-full py-2 text-sm my-[1px] rounded-md p-1 hover:bg-gray-200'>
            <Link className='flex align-bottom justify-start items-center gap-2'>
              <img src='../icons/UserIcon.svg' className='w-4' />
              <span className=' align-bottom block'>Profile</span>
            </Link>
          </li>
          <li className='w-full py-2 text-sm my-[1px] rounded-md p-1'>
            <div className='flex align-bottom justify-between items-center'>
              <div className='flex gap-2'>
                <img src='../icons/TheamIcon.svg' className='w-4' />
                <span className=' align-bottom block'>Theme {theme}</span>
              </div>
              <label className="cursor-pointer items-center text-sm scale-75">
                <input
                  type="checkbox"
                  value=""
                  checked={theme === "dark"}
                  onChange={() => {
                    if (theme === "dark") {
                      setTheme("light");
                    } else {
                      setTheme("dark");
                    }
                  }}
                  className="peer sr-only"
                />
                <div className="rounded-md flex bg-ice p-[1px] border-[1px] font-medium">
                  <div className={`z-10 p-[2px] px-2 rounded-l-md ${theme !== "dark" ? "shadow-md bg-blue-200 text-darkBluesidenavgrey border-[1px]" : "bg-transparent transition-colors duration-300 m-[1px] text-darkBluesidenavgrey"}`}>Light</div>
                  <div className={`z-10 p-[2px] px-2 rounded-r-md ${theme === "dark" ? "shadow-md bg-gray-700 text-lightgrey border-[1px]" : "bg-transparent transition-colors duration-300 m-[1px]"}`}>Dark</div>
                </div>
              </label>
            </div>
          </li>
          <li className='w-full py-2 text-sm my-[1px] rounded-md p-1 hover:bg-gray-200'>
            <Link className='flex align-bottom justify-start items-center gap-2'>
              <img src='../icons/settings.svg' className='w-4' />
              <span className='align-bottom block'>Settings</span>
            </Link>
          </li>
          <li className='w-full py-2 text-sm my-[1px] rounded-md p-1 hover:bg-gray-200'>
            <Link to={"/login"} className='flex align-bottom justify-start items-center gap-2'
              onClick={() => {
                setUserName("")
                alert("logged out");
                localStorage.clear();
                sessionStorage.clear();
              }}>
              <img src='../icons/Logout2.svg' className='w-4' />
              <span className='align-bottom block'>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile;

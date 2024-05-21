import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const getInitials = (str) => {
  const words = str.split(' ');

  const firstInitial = words[0].charAt(0).toUpperCase();
  if (words.length < 2) {
    return firstInitial;
  }
  const secondInitial = words[1].charAt(0).toUpperCase();

  return firstInitial + secondInitial;
}


const Profile = ({ userName }) => {

  const [showDropdown, setShowDropdown] = useState(false)
  const [theam, setTheam] = useState("dark")

  return (
    <div className='relative'>
      <div className=' p-2 px-4 border-[1px] rounded-lg flex items-center cursor-default' onClick={() => setShowDropdown(!showDropdown)}>
        <img src='/icons/userprofile.svg' className='mr-1' />
        {userName}

      </div>
      <div className={`${showDropdown ? "fixed" : "hidden"} border-[1px] bg-white p-2 right-[2rem] top-14 w-[250px] px-4 shadow-sm rounded-md`}>
        {/* <div className='w-full flex justify-end'><span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z" /></svg></span></div> */}
        <div className='p-2'>
          <span className='bg-gray-400 text-center relative px-2 py-1 rounded-full'>{getInitials(userName)}</span>
          <span className='mx-2'>{userName}</span>
        </div>
        <ul className='mt-2'>
          <li className='  w-full py-2 text-sm my-[1px] rounded-md p-1 hover:bg-gray-200 '>
            <Link className='flex align-bottom justify-start items-center gap-2'>
              <img src='./icons/UserIcon.svg' className=' w-4' />
              <span className='text-black  align-bottom  block '>Profile</span>
            </Link>
          </li>
          <li className=' w-full py-2 text-sm my-[1px] rounded-md p-1  '>
            <div className='flex align-bottom justify-between items-center '>
              <div className='flex gap-2'>
                <img src='./icons/TheamIcon.svg' className=' w-4' />
                <span className='text-black  align-bottom  block '>Theam</span>
              </div>
              <label className="cursor-pointer items-center text-sm scale-75">
                <input
                  type="checkbox"
                  value=""
                  checked={theam == "dark"}
                  onChange={() => {
                    if (theam == "dark") {
                      setTheam("light")
                    }
                    else {
                      setTheam('dark')
                    }
                  }}
                  className="peer sr-only"
                />
                {/* <div className=" rounded-md flex bg-blue-200 p-[1px] border-[1px] "> */}
                <div className=" rounded-md flex bg-ice p-[1px] border-[1px] font-medium ">
                  {/* <div className={`z-10 p-[2px] px-2 rounded-l-md ${!isChecked ? "shadow-md bg-white border-[1px]" : "bg-transparent transition-colors duration-300 m-[1px]"}`}>Portfolio</div> */}
                  <div className={`z-10 p-[2px] px-2 rounded-l-md ${theam != "dark" ? "shadow-md bg-blue-200 text-darkBluesidenavgrey border-[1px]" : "bg-transparent transition-colors duration-300 m-[1px]"}`}>Light</div>
                  <div className={`z-10 p-[2px] px-2  rounded-r-md ${theam == "dark" ? "shadow-md bg-gray-700 text-lightgrey border-[1px]" : "bg-transparent transition-colors duration-300 m-[1px]"}`}>Dark</div>
                </div>

              </label>
            </div>
          </li>
          <li className='   w-full py-2 text-sm my-[1px] rounded-md p-1 hover:bg-gray-200 '>
            <Link className='flex align-bottom justify-start items-center gap-2'>
              <img src='./icons/settings.svg' className=' w-4' />
              <span className='text-black  align-bottom  block '>settings</span>
            </Link>
          </li>
          <li className='   w-full py-2 text-sm my-[1px] rounded-md p-1 hover:bg-gray-200 '>
            <Link className='flex align-bottom justify-start items-center gap-2'
            onClick={() => {
              localStorage.clear();
              sessionStorage.clear();
              alert("logged out");
              navigate("/login");
          }} 
            >
              <img src='./icons/Logout2.svg' className=' w-4' />
              <span className='text-black  align-bottom  block '>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile
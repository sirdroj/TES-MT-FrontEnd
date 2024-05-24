import React, { useEffect, useState } from 'react'
import Profile from './Profile'

const Navbar = () => {

  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');

  useEffect(() => {
    setUserName(localStorage.getItem('userName')||'');
  }, [localStorage.getItem('userName')]);

  return (
    <nav className='h-[8vh] shadow-md flex  w-full top-0 items-center justify-between bg-white px-6'>
      <img src='../MTLogo.png' className='h-2/4 m-3 ' alt="Logo" />
      <div>
        {/* <button className='p-2 px-3 mx-4 border-[1px] rounded-lg' onClick={()=>{
                    setpg((pg+1)%2)
                  }}>{pg==0?"Login":"Register"}</button> */}
        {userName ? <Profile userName={userName} /> : ""}
      </div>
    </nav>
  )
}

export default Navbar
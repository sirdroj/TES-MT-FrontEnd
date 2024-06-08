import React, { useState } from 'react'
import AddClientData from '../components/AddClientData'
import { Outlet, useLocation, Link } from 'react-router-dom';
import MapClientbulk from '../components/MapClientSingle';
import MapClient from '../components/MapClient';
import ViewClient from '../components/ViewClient';
import PopUpViewClientFeeDetails from '../components/PopUpViewClientFeeDetails';

const ClientInfo = () => {
    const [activeTab, setActiveTab] = useState("view");

    const location = useLocation();
    const path = location.pathname.split('/')[2]||"";
    console.log({path})
    console.log("ClientInfo",{location});
    // console.log(location.split("/")[1]);
    return (
        <div className='w-full h-full pl-10  relative z-[10]'>
            {/* <PopUpViewClientFeeDetails /> */}

            <div className='w-full'>
                <ul className='flex border-b-2 dark:border-b-darkbg2 text-sm mt-2'>
                    <Link className='' to={"mapClient"}>
                    {/* <li onClick={() => setActiveTab("map_client")} className={`bg-white p-2  mx-1 cursor-pointer ${activeTab == "map_client" ? "border-logeRed border-b-2" : ""} rounded-t-md rounded-b-[-10] px-4 flex items-center`}> <img src='../icons/AddClients.svg' className='h-[16px] mr-1' /> Map Client</li> */}
                    <li className={`bg-white p-2  mx-1 cursor-pointer ${path == "mapClient" || path == ""  ? " border-logeRed dark:bg-darkbg2 border-b-2" : ""} dark:text-neutral-300 dark:bg-darkbg1  rounded-t-md rounded-b-[-10] px-4 flex items-center`}> 
                    <img src='../icons/AddClients.svg' className='h-[16px] mr-1 dark:invert' /> Map Client</li>
                    </Link>
                    {/* <Link className='' to={"addClient"}>
                        <li  className={`bg-white p-2  mx-1 cursor-pointer ${path == "addClient" ? " border-logeRed dark:bg-darkbg2 border-b-2" : ""} dark:text-neutral-300 dark:bg-darkbg1  rounded-t-md rounded-b-[-10] px-4 flex items-center`}>
                            <img src='../icons/AddList.svg' className='h-5 mr-1 dark:invert' /> Add Client</li>
                    </Link> */}
                    <Link className='' to={"addDealsheet"}>
                        {/* <li onClick={() => setActiveTab("add")} className={`bg-white p-2  mx-1 cursor-pointer ${activeTab == "add" ? "border-logeRed border-b-2" : ""} rounded-t-md rounded-b-[-10] px-4 flex items-center`}><img src='../icons/AddList.svg' className='h-5 mr-1' /> Add Client</li> */}
                        <li  className={`bg-white p-2  mx-1 cursor-pointer ${path == "addDealsheet" ? " border-logeRed dark:bg-darkbg2 border-b-2" : ""} dark:text-neutral-300 dark:bg-darkbg1  rounded-t-md rounded-b-[-10] px-4 flex items-center`}>
                            <img src='../icons/AddList.svg' className='h-5 mr-1 dark:invert' /> Add Dealsheet</li>
                    </Link>
                    <Link className='' to={"viewClient"}>
                        {/* <li onClick={() => setActiveTab("view")} className={`bg-white p-2 items-center mx-1 cursor-pointer ${activeTab == "view" ? " border-logeRed border-b-2" : ""} rounded-t-md rounded-b-[-10] px-4 flex`}> */}
                        <li  className={` bg-white   p-2 items-center mx-1 cursor-pointer ${path == "viewClient" ? " border-logeRed dark:bg-darkbg2 border-b-2" : ""} dark:text-neutral-300 dark:bg-darkbg1 rounded-t-md rounded-b-[-10] px-4 flex`}>
                            <img src='../icons/List.svg' className={`h-4 mr-1 dark:invert `} /> View Client
                        </li>
                    </Link>
                </ul>
            </div>
            <div className='w-full'>
                {/* {activeTab == "view" ? <ViewClient /> : activeTab == "add" ? <AddClientData /> : <MapClient />} */}
            <Outlet />
            </div>
        </div>
    )
}

export default ClientInfo
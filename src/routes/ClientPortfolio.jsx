import React, { useState } from 'react'
import AddClientData from '../components/AddClientData'
import { useLocation } from 'react-router-dom';
import MapClientbulk from '../components/MapClientSingle';
import MapClient from '../components/MapClient';
import ViewClient from '../components/ViewClient';

const ClientPortfolio = () => {
    const [activeTab, setActiveTab] = useState("view");

    const location = useLocation();
    console.log(location)
    return (
        <div className='w-full h-full px-10'>
            <div className='w-full'>
                <ul className='flex border-b-2 text-sm mt-2'>
                    <li onClick={() => setActiveTab("view")} className={`bg-white p-2 items-center mx-1 cursor-pointer ${activeTab == "view" ? " border-logeRed border-b-2" : ""} rounded-t-md rounded-b-[-10] px-4 flex`}><img src='./icons/List.svg' className='h-4 mr-1'/> View Client</li>
                    <li onClick={() => setActiveTab("add")} className={`bg-white p-2  mx-1 cursor-pointer ${activeTab == "add" ? "border-logeRed border-b-2" : ""} rounded-t-md rounded-b-[-10] px-4 flex items-center`}><img src='./icons/AddList.svg' className='h-5 mr-1'/> Add Client</li>
                    <li onClick={() => setActiveTab("map_client")} className={`bg-white p-2  mx-1 cursor-pointer ${activeTab == "map_client" ? "border-logeRed border-b-2" : ""} rounded-t-md rounded-b-[-10] px-4 flex items-center`}> <img src='./icons/AddClients.svg' className='h-[16px] mr-1'/> Map Client</li>
                </ul>
            </div>
            <div className='w-full'>
                {activeTab == "view" ? <ViewClient /> : activeTab == "add" ? <AddClientData /> : <MapClient />}
            </div>
        </div>
    )
}

export default ClientPortfolio
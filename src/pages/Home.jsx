import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import SideNav from '../components/SideNav';
import SideNav2 from '../components/SideNav2';

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedLi, setSelectedLi] = useState("");

    useEffect(() => {
        let li=location.pathname.slice(1);
        setSelectedLi(location.pathname.slice(1));
        if(li==""){
            setSelectedLi("dashboard")
        }
    }, [location.pathname]);

    useEffect(() => {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
            navigate("/login");
            alert("session expired");
        }
    }, [navigate]);

    return (
        <div className='flex   relative h-[94vh] mt-[7vh]'>
            <div className='lg:w-46 fixed z-20'>
                <SideNav selectedLi={selectedLi} setSelectedLi={setSelectedLi} />
                {/* <SideNav2 selectedLi={selectedLi} setSelectedLi={setSelectedLi} /> */}
            </div>
            <div className='w-full lg:ml-40 ml-10 '>
                <Outlet />
            </div>
        </div>
    );
};

export default Home;

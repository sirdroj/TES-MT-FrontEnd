import React, { useState } from 'react'
import MapClientSngle from './MapClientSingle';
import MapClientBulk from './MapClientBulk';

const MapClient = () => {

    const [isChecked, setIsChecked] = useState(true);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };


    return (
        <div className='pt-4 w-max'>

            <nav className='flex gap-4 items-center border-b-[1px] pb-2'>

                {/* <label className="relative inline-flex cursor-pointer items-center ">
                    <input
                        type="checkbox"
                        value=""
                        checked={isChecked}
                        onChange={handleChange}
                        className="peer sr-only"
                    />
                    <div className="border-[1px] bg-blue-200 text-gray-600 peer flex h-8 items-center gap-6 rounded-full  px-3 after:absolute after:left-1 after:h-[26px] after:w-12  after:rounded-full after:bg-white after:border-[1px] after:transition-all after:content-[''] peer-checked:after:w-[60px] peer-checked:after:translate-x-[80%] peer-focus:outline-none dark:border-gray-600  text-sm ">
                        <span className='pl-[2px] z-10 py-1'>Bulk</span>
                        <span className='z-10'>Single</span>
                    </div>
                    
                </label> */}
                <label className="cursor-pointer items-center text-sm ">
                    <input
                        type="checkbox"
                        value=""
                        checked={isChecked}
                        onChange={handleChange}
                        className="peer sr-only"
                    />
                    <div className=" rounded-md flex bg-ice p-[1px] border-[1px]  ">
                        <div className={`z-10 p-[2px] px-2 rounded-l-md ${!isChecked ? "shadow-md bg-blue-200 text-darkBluesidenavgrey border-[1px]" : "bg-transparent transition-colors duration-300 m-[1px]"}`}>Bulk</div>
                        <div className={`z-10 p-[2px] px-2 rounded-r-md ${isChecked ? "shadow-md bg-blue-200 text-darkBluesidenavgrey border-[1px]" : "bg-transparent transition-colors duration-300 m-[1px]"}`}>Single</div>
                    </div>

                </label>

                <h1 className='font-semibold text-center w-96 text-gray-600'>{!isChecked ? "Map Client in bulk" : "Map a Single Client"}</h1>

            </nav>
            <div className='w-'>
                {isChecked ? <MapClientSngle /> : <MapClientBulk />}
            </div>

        </div>
    )
}

export default MapClient
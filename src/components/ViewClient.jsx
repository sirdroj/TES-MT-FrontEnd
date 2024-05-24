import React, { useState } from 'react'
import ViewPortfolioData from './ViewPortfolioData';
import ViewCientFees from './ViewCientFees';

const ViewClient = () => {

    const [isChecked, setIsChecked] = useState(true);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };


    return (
        <div className='pt-4'>

            <nav className='flex gap-4 items-center border-b-[1px] pb-2'>
                <label className="cursor-pointer items-center text-sm ">
                    <input
                        type="checkbox"
                        value=""
                        checked={isChecked}
                        onChange={handleChange}
                        className="peer sr-only"
                    />
                    {/* <div className=" rounded-md flex bg-blue-200 p-[1px] border-[1px] "> */}
                    <div className=" rounded-md flex bg-ice p-[1px] border-[1px] ">
                        {/* <div className={`z-10 p-[2px] px-2 rounded-l-md ${!isChecked ? "shadow-md bg-white border-[1px]" : "bg-transparent transition-colors duration-300 m-[1px]"}`}>Portfolio</div> */}
                        <div className={` p-[2px] px-2 rounded-l-md ${!isChecked ? "shadow-md bg-blue-200 text-darkBluesidenavgrey border-[1px]" : "bg-transparent transition-colors duration-300 m-[1px]"}`}>Portfolio</div>
                        <div className={` p-[2px] px-2  rounded-r-md ${isChecked ? "shadow-md bg-blue-200 text-darkBluesidenavgrey border-[1px]" : "bg-transparent transition-colors duration-300 m-[1px]"}`}>Fees</div>
                    </div>

                </label>

                <h1 className='font-semibold text-center w-96 text-gray-600'>{!isChecked ? "View Client Portfolios" : "View Client Fees"}</h1>

            </nav>
            <div>
                {isChecked ?<ViewCientFees />: <ViewPortfolioData />  }
            </div>

        </div>
    )
}

export default ViewClient
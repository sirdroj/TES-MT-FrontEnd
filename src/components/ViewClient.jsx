import React, { useState } from 'react'
import ViewPortfolioData from './ViewPortfolioData';
import ViewCientFees from './ViewCientFees';
import PopUpDownloadClientMaster from './PopUpDownloadClientMaster';

const ViewClient = () => {

    const [isChecked, setIsChecked] = useState(true);
    const [showDownloadMasterPopup,setShowDownloadMasterPopup]=useState(false)

    const handleChange = () => {
        setIsChecked(!isChecked);
    };


    return (
        <div className='pt-4'>
            <PopUpDownloadClientMaster ShowPopUp={showDownloadMasterPopup} setShowPopUp={setShowDownloadMasterPopup} />
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
                    <div className=" rounded-md flex bg-ice text-darkBluesidenavgrey dark:bg-darkbg1 p-[1px] border-[1px] dark:border-darkbg2 dark:text-neutral-300 ">
                        {/* <div className={`z-10 p-[2px] px-2 rounded-l-md ${!isChecked ? "shadow-md bg-white border-[1px]" : "bg-transparent transition-colors duration-300 m-[1px]"}`}>Portfolio</div> */}
                        <div className={` p-[2px] px-2 rounded-l-md ${!isChecked ? "shadow-md bg-blue-200 dark:bg-neutral-600  border-[1px] dark:border-darkbg2  dark:text-neutral-300" : "bg-transparent transition-colors duration-300 m-[1px]"}`}>Portfolio</div>
                        <div className={` p-[2px] px-2  rounded-r-md ${isChecked ? "shadow-md bg-blue-200 dark:bg-neutral-600  border-[1px] dark:border-darkbg2  dark:text-neutral-300" : "bg-transparent transition-colors duration-300 m-[1px]"}`}>Fees</div>
                    </div>

                </label>
                <button onClick={()=>setShowDownloadMasterPopup(true)} className='border-[1px] p-1 rounded-md bg-lightgrey1 shadow-sm text-sm flex'>Download <img className='w-5' src='../icons/downloadSymbol.svg' /></button>
                <h1 className='font-semibold text-center w-96 text-gray-600 dark:text-neutral-300'>{!isChecked ? "View Client Portfolios" : "View Client Fees"}</h1>

            </nav>
            <div>
                {isChecked ?<ViewCientFees />: <ViewPortfolioData />  }
            </div>

        </div>
    )
}

export default ViewClient
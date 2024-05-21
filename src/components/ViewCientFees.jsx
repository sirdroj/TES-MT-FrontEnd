import React, { useState, useEffect } from 'react';
import Table from './Table';
import { getMapClientData } from '../api';
import Table2 from './Table2';

const ViewClientFees = () => {
    const localMasterCode = sessionStorage.getItem("localMapClientMasterCode");
    const localMapClientData = sessionStorage.getItem("localMapClientData");

    const [inputValue, setInputValue] = useState(localMasterCode);
    const [masterCode, setMasterCode] = useState(localMasterCode || "");
    const [mapData, setMapData] = useState(localMapClientData ? JSON.parse(localMapClientData) : []);

    useEffect(() => {
        if (localMasterCode && localMapClientData) {
            setMasterCode(localMasterCode);
            setMapData(JSON.parse(localMapClientData));
        }
    }, [localMasterCode, localMapClientData]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await getMapClientData(inputValue);
        setMapData(res);
        setMasterCode(inputValue);
        sessionStorage.setItem("localMapClientData", JSON.stringify(res));
        sessionStorage.setItem("localMapClientMasterCode", inputValue);
    };

    return (
        <div className="relative mt-5 pb-10">
            <div className='flex justify-between items-center'>
                <form onSubmit={handleSubmit} className='flex bg-gray-50 h-10 w-80 mx-2 px-2 border-[1px] rounded-md'>
                    <div className="inset-y-0 start-0 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        id="master_code_input"
                        type="text"
                        className="p-2 focus:outline-none bg-gray-50"
                        placeholder="Search Master Code"
                        value={inputValue}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit' className='mx-1 bg-lightgrey border-[1px] p-0 px-4 rounded-md shadow-md active:bg-white active:shadow-none m-1'>Search</button>
                </form>
            </div>
            <div className='w-full mt-3 justify-between flex'>
                <div>
                    <div className='w-max rounded-md'>
                        <div className='p-2 text-gray-600'>
                            {mapData.length !== 0 && (
                                <span>
                                    <b>Master Id:</b> <span className='text-blue-500 font-semibold'>{masterCode}</span>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {mapData.length !== 0 ? (
                    <Table2 tabledata={mapData} setTableData={setMapData} />
                    // <Table tabledata={mapData} setTableData={setMapData} />
                ) : (
                    "No data to display"
                )}
            </div>
        </div>
    );
};

export default ViewClientFees;

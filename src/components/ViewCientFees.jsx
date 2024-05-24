import React, { useState, useEffect } from 'react';
import Table from './Table';
import { getMapClientData } from '../api';
import Table2 from './Table2';
import PopUpViewClientFeeDetails from './PopUpViewClientFeeDetails';
import Table2ClientFees from './Table2ClientFees';

const ViewClientFees = () => {


    const demodata=[
        {
          "Date": "4/1/2024",
          "Total Market Value": 5202263.36,
          "Chargeable Market Value": 5202263.36,
          "Flat Fees": 213.79,
          "Our Calculation": 213.79
        },
        {
          "Date": "4/2/2024",
          "Total Market Value": 5239607.46,
          "Chargeable Market Value": 5239607.46,
          "Flat Fees": 215.33,
          "Our Calculation": 215.33
        },
        {
          "Date": "4/3/2024",
          "Total Market Value": 5265050.51,
          "Chargeable Market Value": 5265050.51,
          "Flat Fees": 216.37,
          "Our Calculation": 216.37
        },
        {
          "Date": "4/4/2024",
          "Total Market Value": 5298439.81,
          "Chargeable Market Value": 5298439.81,
          "Flat Fees": 217.74,
          "Our Calculation": 217.74
        },
        {
          "Date": "4/5/2024",
          "Total Market Value": 5325865.66,
          "Chargeable Market Value": 5325865.66,
          "Flat Fees": 218.87,
          "Our Calculation": 218.87
        },
        {
          "Date": "4/6/2024",
          "Total Market Value": 5325865.66,
          "Chargeable Market Value": 5325865.66,
          "Flat Fees": 218.87,
          "Our Calculation": 218.87
        },
        {
          "Date": "4/7/2024",
          "Total Market Value": 5325865.66,
          "Chargeable Market Value": 5325865.66,
          "Flat Fees": 218.87,
          "Our Calculation": 218.87
        },
        {
          "Date": "4/8/2024",
          "Total Market Value": 5328692.46,
          "Chargeable Market Value": 5328692.46,
          "Flat Fees": 218.99,
          "Our Calculation": 218.99
        },
        {
          "Date": "4/9/2024",
          "Total Market Value": 5294393.16,
          "Chargeable Market Value": 5294393.16,
          "Flat Fees": 217.58,
          "Our Calculation": 217.58
        },
        {
          "Date": "4/10/2024",
          "Total Market Value": 5290055.31,
          "Chargeable Market Value": 5290055.31,
          "Flat Fees": 217.4,
          "Our Calculation": 217.4
        },
        {
          "Date": "4/11/2024",
          "Total Market Value": 5290055.31,
          "Chargeable Market Value": 5290055.31,
          "Flat Fees": 217.4,
          "Our Calculation": 217.4
        },
        {
          "Date": "4/12/2024",
          "Total Market Value": 5276940.21,
          "Chargeable Market Value": 5276940.21,
          "Flat Fees": 216.86,
          "Our Calculation": 216.86
        },
        {
          "Date": "4/13/2024",
          "Total Market Value": 5276940.21,
          "Chargeable Market Value": 5276940.21,
          "Flat Fees": 216.86,
          "Our Calculation": 216.86
        },
        {
          "Date": "4/14/2024",
          "Total Market Value": 5276940.21,
          "Chargeable Market Value": 5276940.21,
          "Flat Fees": 216.86,
          "Our Calculation": 216.86
        },
        {
          "Date": "4/15/2024",
          "Total Market Value": 5219437.01,
          "Chargeable Market Value": 5219437.01,
          "Flat Fees": 214.5,
          "Our Calculation": 214.5
        },
        {
          "Date": "4/16/2024",
          "Total Market Value": 5200920.3,
          "Chargeable Market Value": 5200920.3,
          "Flat Fees": 213.74,
          "Our Calculation": 213.74
        },
        {
          "Date": "4/17/2024",
          "Total Market Value": 5200920.3,
          "Chargeable Market Value": 5200920.3,
          "Flat Fees": 213.74,
          "Our Calculation": 213.74
        },
        {
          "Date": "4/18/2024",
          "Total Market Value": 5163962.79,
          "Chargeable Market Value": 5163962.79,
          "Flat Fees": 212.22,
          "Our Calculation": 212.22
        },
        {
          "Date": "4/19/2024",
          "Total Market Value": 5178509.04,
          "Chargeable Market Value": 5178509.04,
          "Flat Fees": 212.82,
          "Our Calculation": 212.82
        },
        {
          "Date": "4/20/2024",
          "Total Market Value": 5178509.04,
          "Chargeable Market Value": 5178509.04,
          "Flat Fees": 212.82,
          "Our Calculation": 212.82
        },
        {
          "Date": "4/21/2024",
          "Total Market Value": 5178509.04,
          "Chargeable Market Value": 5178509.04,
          "Flat Fees": 212.82,
          "Our Calculation": 212.82
        },
        {
          "Date": "4/22/2024",
          "Total Market Value": 5269851.29,
          "Chargeable Market Value": 5269851.29,
          "Flat Fees": 216.57,
          "Our Calculation": 216.57
        },
        {
          "Date": "4/23/2024",
          "Total Market Value": 5305382.62,
          "Chargeable Market Value": 5305382.62,
          "Flat Fees": 218.03,
          "Our Calculation": 218.03
        },
        {
          "Date": "4/24/2024",
          "Total Market Value": 5355517.57,
          "Chargeable Market Value": 5355517.57,
          "Flat Fees": 220.09,
          "Our Calculation": 220.09
        },
        {
          "Date": "4/25/2024",
          "Total Market Value": 5387180.02,
          "Chargeable Market Value": 5387180.02,
          "Flat Fees": 221.39,
          "Our Calculation": 221.39
        },
        {
          "Date": "4/26/2024",
          "Total Market Value": 5386568.77,
          "Chargeable Market Value": 5386568.77,
          "Flat Fees": 221.37,
          "Our Calculation": 221.37
        },
        {
          "Date": "4/27/2024",
          "Total Market Value": 5386568.77,
          "Chargeable Market Value": 5386568.77,
          "Flat Fees": 221.37,
          "Our Calculation": 221.37
        },
        {
          "Date": "4/28/2024",
          "Total Market Value": 5386568.77,
          "Chargeable Market Value": 5386568.77,
          "Flat Fees": 221.37,
          "Our Calculation": 221.37
        },
        {
          "Date": "4/29/2024",
          "Total Market Value": 5441826.27,
          "Chargeable Market Value": 5441826.27,
          "Flat Fees": 223.64,
          "Our Calculation": 223.64
        },
        {
          "Date": "4/30/2024",
          "Total Market Value": 5450401.97,
          "Chargeable Market Value": 5450401.97,
          "Flat Fees": 223.99,
          "Our Calculation": 223.99
        }
      ];

    const localMasterCode = sessionStorage.getItem("localMapClientMasterCode");
    const localMapClientData = sessionStorage.getItem("localMapClientData");
    const [inputValue, setInputValue] = useState(localMasterCode);
    const [masterCode, setMasterCode] = useState(localMasterCode || "");
    const [mapData, setMapData] = useState(localMapClientData ? JSON.parse(localMapClientData) : []);
    const [currentClientCode,setCurrentClientCode]=useState("")
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
        <div className=" mt-5 pb-10">
            <PopUpViewClientFeeDetails demodata={demodata} ClientCode={currentClientCode} />
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
                    <Table2ClientFees tabledata={mapData} setTableData={setMapData} setCurrentClientCode={setCurrentClientCode} />
                    // <Table tabledata={mapData} setTableData={setMapData} />
                ) : (
                    "No data to display"
                )}
            </div>
        </div>
    );
};

export default ViewClientFees;

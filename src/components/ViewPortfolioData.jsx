import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { getCliendData } from '../api';
import ClientDataTable from './ClientDataTable';
import BuyStockPopUp from './BuyStockPopUp';
import SellStockPopUp from './SellStockPopUp';
import Table2 from './Table2';
import EditableTable from './EditableTable';

const ViewPortfolioData = () => {
    const [showBuyPopup, setShowBuyPopup] = useState(false)
    const [showSellPopup, setShowSellPopup] = useState(false)
    const [popUpOptions, setpopUpOptions] = useState("buy");
    const [threedotsActive, setThreedotsActive] = useState(false)
    const localClientData = sessionStorage.getItem("CurrentClientData");
    const localClientCode = sessionStorage.getItem("CurrentClientCode")
    const localClientName = sessionStorage.getItem("CurrentClientName")
    const [inputValue, setInputValue] = useState(localClientCode);
    const [CurrentClientData, setCurrentClientData] = useState(localClientData ? JSON.parse(localClientData) : "");
    const [currentClient_Code, setCurrentClient_Code] = useState(localClientCode);
    const [currentClientName, setCurrentClientName] = useState(localClientName);
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    async function refresh() {
        try {

            const clientDataRes = await getCliendData(currentClient_Code);
            if ('error' in clientDataRes) {
                alert(clientDataRes["error"]);
                return
            }
            const data = JSON.stringify(clientDataRes["stock_data"])
            sessionStorage.setItem("CurrentClientData", data);
            sessionStorage.setItem("CurrentClientCode", inputValue);
            sessionStorage.setItem("CurrentClientName", clientDataRes["client_name"]);
            setCurrentClient_Code(inputValue);
            setCurrentClientName(clientDataRes["client_name"]);
            setCurrentClientData(clientDataRes["stock_data"]);
            // console.log("Client Data:", clientDataRes);
        } catch (error) {
            console.error("Error fetching client data:", error);
        }
    }
    const handleSearch = async (e) => {
        e.preventDefault()
        try {

            const clientDataRes = await getCliendData(inputValue);
            if ('error' in clientDataRes) {
                alert(clientDataRes["error"]);
                return
            }
            const data = JSON.stringify(clientDataRes["stock_data"])
            sessionStorage.setItem("CurrentClientData", data);
            sessionStorage.setItem("CurrentClientCode", inputValue);
            sessionStorage.setItem("CurrentClientName", clientDataRes["client_name"]);
            setCurrentClient_Code(inputValue);
            setCurrentClientName(clientDataRes["client_name"]);
            setCurrentClientData(clientDataRes["stock_data"]);
            // console.log("Client Data:", clientDataRes);
        } catch (error) {
            console.error("Error fetching client data:", error);
        }
    }
    console.log({ CurrentClientData })

    return (
        <div className="relative mt-5 pb-10">
            <div className='flex justify-between'>
                {/* <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="w-80 h-10 pl-5 pr-4 shadow-md rounded-md p-3 focus:outline-none"
                        placeholder="Search Client Id"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button type='submit' className='mx-3 border-[1px] p-2 px-4 rounded-md shadow-md active:bg-white active:shadow-none' >Search</button>
                </form> */}
                <form onSubmit={handleSearch} className='flex bg-gray-50  dark:bg-darkbg0 h-10 w-80 mx-2 px-2 border-[1px] dark:border-darkbg2 rounded-md'>
                    <div className=" inset-y-0 start-0 flex items-center  pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        id="client_Code_input"
                        type="text"
                        className=" p-2 focus:outline-none bg-gray-50 dark:bg-darkbg0 dark:text-neutral-300"
                        placeholder="Search Client Code"
                        value={inputValue}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit' className='mx-1 bg-lightgrey dark:bg-darkbg2 dark:border-darkbg1 dark:text-neutral-300 border-[1px] p-0 px-4 rounded-md shadow-md active:bg-white active:shadow-none m-1' >Search</button>
                </form>


            </div>
            <SellStockPopUp refresh={refresh} CurrentClientData={CurrentClientData} setShowSellPopup={setShowSellPopup} showSellPopup={showSellPopup} options={popUpOptions} setOptions={setpopUpOptions} currentClient_Code={currentClient_Code} />
            <BuyStockPopUp refresh={refresh} CurrentClientData={CurrentClientData} setShowBuyPopup={setShowBuyPopup} showBuyPopup={showBuyPopup} options={popUpOptions} setOptions={setpopUpOptions} currentClient_Code={currentClient_Code} />
            <div className='w-full mt-5 justify-between flex '>
                <div>
                    {currentClient_Code &&
                        <div className=' w-max rounded-md '>
                            <div className='p-2 text-gray-600 dark:text-neutral-300'>

                                <b>Client Code:</b> <span className=''>{currentClient_Code}</span>
                            </div>

                            <div className='p-2  rounded-m text-gray-600 dark:text-neutral-300'>

                                <b>Client Name:</b> <span className=''>{currentClientName}</span>
                            </div>

                        </div>
                    }
                </div>
                <div className='flex items-end'>
                    <button className='p-2 border-[1px] px-5 text-white  bg-blue-500 rounded-lg border-green-400 shadow-md active:shadow-none mx-2'>Add</button>
                    <button onClick={() => {
                        // setpopUpOptions("buy");
                        setShowBuyPopup(true);
                    }} className='p-2 border-[1px] px-5 text-white bg-green-500 rounded-lg border-blue-400 shadow-md active:shadow-none mx-2'>Buy</button>
                    <button onClick={() => {
                        // setpopUpOptions("sell");
                        setShowSellPopup(true);
                    }} className='p-2 border-[1px] px-5 text-white bg-orange-500 rounded-lg border-orange-400 shadow-md active:shadow-none mx-2'>Sell</button>
                </div>
            </div>
            {CurrentClientData && CurrentClientData.length > 0 ? (
                // <ClientDataTable ClientData={CurrentClientData} currentClient_id={currentClient_id} />
                <Table2 tabledata={CurrentClientData} setTableData={setCurrentClientData} />
                // <EditableTable tabledata={CurrentClientData} setTableData={setCurrentClientData} />
            ) : (
                "No Data Available"
            )}
        </div>
    )
}

export default ViewPortfolioData
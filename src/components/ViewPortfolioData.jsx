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
    const localClientId = sessionStorage.getItem("CurrentClientId")
    const localClientName = sessionStorage.getItem("CurrentClientName")
    const [inputValue, setInputValue] = useState(localClientId);
    const [CurrentClientData, setCurrentClientData] = useState(localClientData ? JSON.parse(localClientData) : "");
    const [currentClient_id, setCurrentClient_id] = useState(localClientId);
    const [currentClientName, setCurrentClientName] = useState(localClientName);
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    async function refresh() {
        try {

            const clientDataRes = await getCliendData(currentClient_id);
            if ('error' in clientDataRes) {
                alert(clientDataRes["error"]);
                return
            }
            const data = JSON.stringify(clientDataRes["stock_data"])
            sessionStorage.setItem("CurrentClientData", data);
            sessionStorage.setItem("CurrentClientId", inputValue);
            sessionStorage.setItem("CurrentClientName", clientDataRes["client_name"]);
            setCurrentClient_id(inputValue);
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
            sessionStorage.setItem("CurrentClientId", inputValue);
            sessionStorage.setItem("CurrentClientName", clientDataRes["client_name"]);
            setCurrentClient_id(inputValue);
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
                <form onSubmit={handleSearch} className='flex bg-gray-50 w-80 mx-2  px-2 border-[1px] rounded-md'>
                    <div className=" inset-y-0 start-0 flex items-center  pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        id="client_id_input"
                        type="text"
                        className=" p-2 focus:outline-none bg-gray-50 "
                        placeholder="Search Client Id"
                        value={inputValue}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit' className='mx-3 bg-lightgrey border-[1px] p-1 px-4 rounded-md shadow-md active:bg-white active:shadow-none m-2' >Search</button>
                </form>


            </div>
            <SellStockPopUp refresh={refresh} CurrentClientData={CurrentClientData} setShowSellPopup={setShowSellPopup} showSellPopup={showSellPopup} options={popUpOptions} setOptions={setpopUpOptions} currentClient_id={currentClient_id} />
            <BuyStockPopUp refresh={refresh} CurrentClientData={CurrentClientData} setShowBuyPopup={setShowBuyPopup} showBuyPopup={showBuyPopup} options={popUpOptions} setOptions={setpopUpOptions} currentClient_id={currentClient_id} />
            <div className='w-full mt-5 justify-between flex '>
                <div>
                    {currentClient_id &&
                        <div className=' w-max rounded-md'>
                            <div className='p-2 text-gray-600'>

                                <b>Client Id:</b> <span className=''>{currentClient_id}</span>
                            </div>

                            <div className='p-2  rounded-m text-gray-600'>

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
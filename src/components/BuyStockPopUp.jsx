import React, { useState } from 'react'
import universeData from '../assets/universeData';
import { StockFinder } from '../utils';
import {  buyStock } from '../api';
const BuyStockPopUp = ({refresh, showBuyPopup, setShowBuyPopup, options, setOptions, CurrentClientData, currentClient_id}) => {
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const [ticker, setTicker] = useState("");
    const [currentStockName, setCurrentStockName] = useState("");
    const [rate, setRate] = useState(12.12)
    const [suggestions, setSuggestions] = useState([]);
    const [searchinputText, setsearchInputText] = useState('');
    const handleSearchChange = (e) => {
        const searchText = e.target.value.toLowerCase();
        setsearchInputText(searchText);
        const filteredTickers = universeData.filter(item => {
            return item.Ticker.toLowerCase().includes(searchText) || item.NAME.toLowerCase().includes(searchText);
        });
        setSuggestions(filteredTickers);
    };

    function handelTickerSearch(e) {
        e.preventDefault();
        if (StockFinder(CurrentClientData, searchinputText)) {
            alert("This stock already exists in the current portfolio");
            return;
        }
        setTicker(searchinputText);
    }
    async function handleBuy() {
        if(!currentClient_id || !ticker || !quantity || !rate){
            alert("make sure all data are enterde correctly")
            return
        }
        if (StockFinder(CurrentClientData, ticker)) {
            alert("This stock already exists in the current portfolio");
            return;
        }
        console.log("handel buy called");
        
        const formData={
            'client':currentClient_id,
            "stock_name":ticker,
            'entry_rate':rate,
            'quantity':quantity,
        }
        const res = await buyStock(formData);
        console.log({res});
        refresh()
    }

    const handleSelect = (ticker) => {
        if (StockFinder(CurrentClientData, ticker.Ticker)) {
            alert("This stock already exists in the current portfolio");
            return;
        }
        setsearchInputText(ticker.Ticker);
        setCurrentStockName(ticker.Name);
        setSuggestions([]);
        setTicker(ticker.Ticker);
    };
    return (
        <div className={`${showBuyPopup ? "fixed" : "hidden"} w-screen h-screen top-0 left-0 bg-opacity-60 bg-gray-800 rounded-md`}>
            <div className='w-full h-full flex items-center justify-center'>
                <div className=' w-[35rem]  bg-white shadow-md rounded-md '>
                    <header className={`flex justify-between items-start ${options == "sell" ? "bg-orange-500" : "bg-green-400"}  text-white p-3 rounded-t-md`} >
                        <div>
                            <h1>{options == "sell" ? "Sell" : "Buy"} {ticker} x {quantity} Qty </h1>
                            <h1>Price: {rate}</h1>
                        </div>
                        {/* <label class="inline-flex items-center cursor-pointer scale-[0.6] ">
                            <input type="checkbox"
                                checked={options == "sell"}
                                onChange={() => {
                                    if (options == "buy") {
                                        setOptions("sell");
                                    } else {
                                        setOptions("buy");
                                    }
                                }} className="sr-only peer" />
                            <div className="relative w-11 h-6 peer-focus:outline-none rounded-full peer bg-gray-200 bg-opacity-40 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
                        </label> */}
                    </header>
                    <section className='h-60 p-4 relative'>
                        <div className='relative justify-start px-1 mb-2'>
                            <form className='flex bg-gray-50 w-72 mx-2  px-2 border-[1px] rounded-md ' onSubmit={handelTickerSearch}>
                                <div className=" inset-y-0 start-0 flex items-center  pointer-events-none">
                                    <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    // id="ticker_input"
                                    type="text"
                                    className=" p-2 focus:outline-none bg-gray-50 text-sm "
                                    placeholder="Search Ticker"
                                    value={searchinputText}
                                    onChange={handleSearchChange}
                                    required
                                />
                                <button type='submit' className='mx-3 text-sm bg-lightgrey border-[1px] p-1 px-4 rounded-md shadow-md active:bg-white active:shadow-none m-1'  >Search</button>
                            </form>

                            <ul className="suggestions absolute top-[40px] left-5 rounded-md bg-white z-10 text-sm p-1 shadow-md">
                                {suggestions.slice(0, 5).map(ticker => (
                                    <li key={ticker.Ticker} className=' cursor-pointer m-[2px] border-b-[1px]' onClick={() => handleSelect(ticker)}>
                                        {ticker.Ticker} - {ticker.NAME}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex' >
                            <div className="relative py-2 px-3 m-3 border-[1px] rounded-lg w-40">
                                <span className='bg-white absolute top-[-11px] px-1 text-sm text-gray-500'>Qty</span>
                                <div className="w-full flex justify-between items-center gap-x-5">
                                    <div className="grow">
                                        <input className="w-full p-0 bg-transparent focus:outline-none border-0 text-gray-800 focus:ring-0 active:outline-none" type="number" value={quantity}
                                            onChange={(e) => {
                                                setQuantity(Math.floor(parseInt(e.target.value)));
                                                setPrice(parseInt(e.target.value) * rate)
                                            }}
                                        />
                                    </div>
                                    {/* <div className="flex justify-end items-center gap-x-1.5">
                                    <button onClick={() => {
                                        if (quantity > 0) {
                                            setQuantity(quantity - 1);
                                        }
                                    }} type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-decrement="">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                        </svg>
                                    </button>
                                    <button onClick={() => setQuantity(prevQuantity => prevQuantity + 1)} type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-increment="">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5v14"></path>
                                        </svg>
                                    </button>
                                </div> */}
                                </div>
                            </div>
                            <div className="relative py-2 px-3 m-3 border-[1px] rounded-lg w-40" >
                                <span className='bg-white absolute top-[-11px] px-1 text-sm text-gray-500'>Price</span>
                                <div className="w-full flex justify-between items-center gap-x-5">
                                    <div className="grow relative">
                                        <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 focus:outline-none active:outline-none" type="number"
                                            value={price}
                                            onChange={(e) => {
                                                setPrice(e.target.value);
                                                let qt = Math.floor(parseInt(e.target.value) / rate);
                                                setQuantity(qt > 0 ? qt : 0); // Handle division by zero
                                            }}
                                        />
                                        <span className='absolute w-max bottom-[-2rem] text-sm left-0'>Demand price: {quantity * rate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='flex justify-end p-2 border-t-[1px]'>
                        <button onClick={handleBuy} className={`border-[1px] mx-1 p-2 px-4 rounded-md text-white ${options == "buy" ? "bg-green-400" : "bg-orange-400"} `}>{options == "buy" ? "Buy" : "Sell"}</button>
                        <button onClick={() => setShowBuyPopup(false)} className='border-[1px] mx-1 p-2 px-4 rounded-md'>Cancel</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BuyStockPopUp
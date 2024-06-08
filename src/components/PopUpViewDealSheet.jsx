import React, { useEffect, useState } from 'react'
import Table2 from './Table2'
import useStore from '../store'
import { getSingleClientData } from '../api'

function capitalizeAndRemoveDash(inputString) {
    const words = inputString.split('_');
    const capitalizedString = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return capitalizedString;
  }
  ;

const PopUpViewDealSheet = ({ masterCode,ShowPopUp,setShowPopUp }) => {
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');
    const [tabledata,setTableData]=useState([
        {
            "ISIN No.": "INE117A01022",
            "Stock Name": "ABB INDIA LIMITED",
            "CMP": "6529.8",
            "Buy Qty": "85",
            "Buy Value": "555033",
            "02SS11": "30",
            "02AM11": "55",
            "02YM11": "30",
            
          },
        {
            "ISIN No.": "INE358A01014",
            "Stock Name": "ABBOTT INDIA LIMITED",
            "CMP": "26420.5",
            "Buy Qty": "84",
            "Buy Value": "5550333",
            "02SS11": "30",
            "02AM11": "55",
            "02YM11": "30",
            
          },
        {
            "ISIN No.": "INE731H01025",
            "Stock Name": "ACTION CONSTRUCTION EQUIPMENT LIMITED",
            "CMP": "1551.95",
            "Buy Qty": "603",
            "Buy Value": "10050333",
            "02SS11": "20",
            "02AM11": "45",
            "02YM11": "60",
            
          }
    ]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await getSingleClientData(ClientCode);
    //             setTableData(data);
    //         } catch (error) {
    //             console.error("Error fetching data: ", error);
    //         }
    //     };

    //     if (ClientCode) {
    //         fetchData();
    //     }
    // }, [ClientCode]);

    const handleSort = (field) => {
        const direction = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortDirection(direction);

        const sortedData = [...tabledata].sort((a, b) => {
            if (a[field] < b[field]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[field] > b[field]) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });

        setTableData(sortedData);
    };

    const tableHeaders = Object.keys(tabledata[0] || []);

    return (
        <div className={`${ShowPopUp ? "fixed" : "hidden"} lg:pl-48 pl-20 pb-10 z- top-11 h-full w-full left-0 bg-opacity-60 bg-gray-800 rounded-md`}>
            <div className='relative w-full justify-end p-4 flex'>
                <img
                    src="../icons/Close.svg"
                    alt="Close"
                    className='w-7 opacity-60 bg-gray-400 bg-opacity-30 hover:bg-opacity-70 hover:shadow-md rounded-full p-1'
                    onClick={() => setShowPopUp(!ShowPopUp)}
                />
            </div>
            <div className='h-full items-center pr-10 pt-0 justify-center'>
                <div className='w-full h-[85%] bg-white px-10 p-5  shadow-md rounded-lg z-10 '>
                    <header className='justify-around'>
                        <h1 className='text-center text-[25px] font-semibold w-full border-b-[1px]'>Deal Sheet</h1>
                        <div className='flex justify-between'>
                        <h1 className='p-2'>MasterCode: <b>{masterCode}</b></h1>
                        <button className='d px-2 p-1 rounded-md m-2 bg-blue-400 shadow-md active:shadow-none text-neutral-900'>Send to FA</button>
                        </div>
                    </header>
                    <div className='flex justify-start overflow-scroll h-[86%]'>
                        {tabledata.length === 0 ? "No data found" :
                            <div className='text-gray-700 mt-5 rounded-md text-xs'>
                                <table className="border-collapse border-gray-700 bg-white shadow-md mx-2 mr-10 mb-10">
                                    <thead>
                                        <tr>
                                            <th
                                                onClick={() => {
                                                    // setTableData(demodata)
                                                    setSortField("")
                                                }}
                                                className="border-x  px-2 py-2 cursor-pointer text-[16px]"
                                            >
                                                No
                                            </th>
                                            {tableHeaders.map((header, index) => (
                                                <th
                                                    key={index}
                                                    className="border-x  px-0 lg:px-5 py-2 cursor-pointer text-[16px] "
                                                    onClick={() => handleSort(header)}
                                                >
                                                    <div className='flex justify-center lg:px-3 px-1 items-center'>
                                                        <span className='text-center w-max pl-0'>{capitalizeAndRemoveDash(header)}</span>
                                                        <span className='w-max'>
                                                            <img
                                                                src="../icons/dropdownArrow.svg"
                                                                className={`h-4 ${sortDirection === 'asc' ? "rotate-180" : ""} ${sortField === header ? "block" : "hidden"}`}
                                                            />
                                                        </span>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tabledata.map((stock, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-lightgrey2 ' : ''}>
                                                <td className="border-x  font-semibold text-[15px]  px-2 py-2 text-center">{index + 1}</td>
                                                {tableHeaders.map((header, colIndex) => (
                                                    <td className="border-x font-semibold text-[15px] w-max px-2 py-2 text-center" key={colIndex}>
                                                        {stock[header]}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpViewDealSheet

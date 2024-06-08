import React, { useState } from 'react';
import useStore from '../store';
import { getSingleClientData } from '../api';

function capitalizeAndRemoveDash(inputString) {
    const words = inputString.split('_');
    const capitalizedString = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return capitalizedString;
}


const Table2ClientFees = ({ tabledata, setTableData, setCurrentClientCode }) => {
    const tableHeaders = Object.keys(tabledata[0]);
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');
    const showClientFeePopUp=useStore(stste=>stste.setviewClientFeesPopup)



    async function handleClientCodeClick(client_code) {
        // alert("yoo");
        showClientFeePopUp(true);
        setCurrentClientCode(client_code);
    }


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

    return (
        <div className='text-gray-700 mt-5 rounded-md text-xs'>
            <table className="border-collapse border-gray-700 bg-white dark:bg-darkbg1 dark:text-neutral-300 shadow-md w-min">
                <thead>
                    <tr>
                        <th className="py-2 px-2">No</th>
                        {tableHeaders.map((header, index) => (
                            <th
                                key={index}
                                className="border-x dark:border-darkbg0 w-max px-2 py-2 cursor-pointer "
                                onClick={() => handleSort(header)}
                            >
                                <div className='flex justify-center px-2  items-center ' >
                                    <span className=' text-center pl-0 w-max'>{capitalizeAndRemoveDash(header)}</span>
                                    <span className='w-max'>
                                        <img src="../icons/dropdownArrow.svg" className={`h-4 dark:invert ${sortDirection === 'asc' ? "rotate-180" : ""} ${sortField === header ? "block" : "hidden"}`} />
                                    </span>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tabledata.map((stock, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-lightgrey2 dark:bg-darkbg2' : ''}>
                            <td className="px-2 py-2 text-center">{index + 1}</td>
                            {tableHeaders.map((header, colIndex) => (
                                header == "client_code" ?
                                    <td className="border-x dark:border-darkbg0 w-[10%] px-2 py-2 text-center hover:underline cursor-pointer text-blue-600 font-semibold" key={colIndex}
                                        onClick={() => {
                                            handleClientCodeClick(stock[header]);
                                        }}
                                    >
                                        {stock[header]}
                                    </td>
                                    : <td className="border-x dark:border-darkbg0 font-semibold w-[10%] px-2 py-2 text-center" key={colIndex}>
                                        {stock[header]}
                                    </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table2ClientFees;

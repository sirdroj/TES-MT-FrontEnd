import React, { useState } from 'react';

function capitalizeAndRemoveDash(inputString) {
    const words = inputString.split('_');
    const capitalizedString = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return capitalizedString;
  }

const Table2 = ({ tabledata, setTableData }) => {
    const tableHeaders = Object.keys(tabledata[0]);
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

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
            <table className="border-collapse border-gray-700 dark:text-neutral-300 bg-white dark:bg-darkbg2 shadow-md w-min">
                <thead>
                    <tr >
                        <th className="py-2 px-2">No</th>
                        {tableHeaders.map((header, index) => (
                            <th
                                key={index}
                                className="dark:border-darkbg0 border-x w-max px-2 py-2 cursor-pointer "
                                onClick={() => handleSort(header)}
                            >
                                <div className='flex justify-center px-2  items-center ' >
                                    <span className=' text-center pl-0 w-max'>{capitalizeAndRemoveDash(header)}</span>
                                    <span className='w-max'>
                                        <img src="../icons/dropdownArrow.svg" className={`h-4 dark:invert ${sortDirection === 'asc'?"rotate-180":""} ${sortField === header?"block":"hidden"}`}/>
                                    </span>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tabledata.map((stock, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-lightgrey2 dark:bg-darkbg1' : 'dark:bg-darkbg2'}>
                            <td className="px-2 py-2 text-center dark:border-darkbg0">{index + 1}</td>
                            {tableHeaders.map((header, colIndex) => (
                                <td className="border-x w-[10%] px-2 py-2 text-center dark:border-darkbg0" key={colIndex}>
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

export default Table2;

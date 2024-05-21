import React, { useState } from 'react'

const Table = ({ tabledata, setTableData }) => {
    // console.log({tabledata})
    const [sortField, setSortField] = useState();
    const tableHeaders = Object.keys(tabledata[0]);


    return (
        <div className=' text-gray-700  mt-5 rounded-md text-xs'>
            <table className="border-collapse border border-gray-700 bg-white shadow-md  w-min">
                <thead>
                    <tr>
                        <th className={`border border-t-0 border-gray-700 px-0 py-2`}>No</th>
                        {tableHeaders.map((header, index) => (

                            <th key={index} className={`border border-t-0 w-min border-gray-700 px-2 py-2`}>{header}</th>))}

                    </tr>
                </thead>
                <tbody>
                    {tabledata.map((stock, index) => (
                        <tr key={index}>
                            <td className={`border border-gray-700 px-2 py-2 `} key={index}>{index + 1}</td>
                            {tableHeaders.map((header, colIndex) => (
                                <td className={`border w-[10%] border-gray-700 px-2 py-2 text-center`} key={colIndex}>{stock[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
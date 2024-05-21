import React from 'react'

const ClientDataTable = ({ ClientData }) => {
    const tableHeaders = Object.keys(ClientData[0]);
    return (
        <div className=' text-gray-700 shadow-md  mt-5 rounded-md text-xs'>
            <table className="border-collapse border border-gray-700 p-2 bg-white" >
                <thead>
                    <tr>
                        {tableHeaders.map((header, index) => (
                            header!="client"?
                            <th key={index} className={`border border-t-0 border-gray-700 px-2 py-2`}>{header}</th>:<th key={index} className={`border border-t-0 border-gray-700 px-0 py-2`}>No</th>))}
                            
                            </tr>
                </thead>
                <tbody>
                    {ClientData.map((stock, index) => (
                        <tr key={index}>
                            {tableHeaders.map((header, colIndex) => (
                                 header!="client"?<td className={`border border-gray-700 px-2 py-2 `} key={colIndex}>{stock[header]}</td>:<td className={`border border-gray-700 px-2 py-2 `} key={colIndex}>{index+1}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ClientDataTable
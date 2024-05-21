import React, { useState } from 'react'

const EditableTable = ({  }) => {
    const [tableData, setTableData] = useState([
        {
            "Client Code": "02AH11",
            "AUM": 5000000,
            "Management Fee(%)": 2,
            "Management Fee Value": 100000,
        },
        {
            "Client Code": "02SS11",
            "AUM": 7500000,
            "Management Fee(%)": 2,
            "Management Fee Value": 150000,
        },
    ])
    const handleChange = (index, key, value) => {
        let newTableData = [...tableData];
        newTableData[index][key] = value;
        setTableData(newTableData);
    }
    const tableHeaders = Object.keys(tableData[0]);

    return (
        <div className=' text-gray-700 bg-white shadow-md p-1 mt-5 rounded-md text-xs'>
            <table className="border-collapse border border-gray-700 " style={{ width: '100%' }}>
                <thead>
                    <tr>
                        {tableHeaders.map((header, index) => (
                            <th key={index} className={`border border-t-0 border-gray-700 px-2 py-2`}>{header}</th>
                        ))
                        }

                    </tr>
                </thead>
                <tbody>
                    {tableData.map((stock, index) => (
                        <tr key={index}>
                            {tableHeaders.map((header, colIndex) => (
                                header=="Client Code"?
                                <td className={`border border-gray-700 focus:outline-none active:outline-none px-2 py-2 `} key={colIndex}>{stock[header]}</td>:
                                <td className={`border-[2px] border-gray-700  px-2 py-2 `} key={colIndex}>
                                    <input className={`focus:outline-none  `} key={colIndex}
                                    value={stock[header]}
                                    onChange={(e) => handleChange(index, header, e.target.value)}
                                />
                                </td>

                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EditableTable
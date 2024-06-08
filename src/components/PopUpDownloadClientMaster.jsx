import React, { useEffect, useState } from 'react'
import useStore from '../store'
// import { parse } from 'json2csv';


function capitalizeAndRemoveDash(inputString) {
    const words = inputString.split('_');
    const capitalizedString = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return capitalizedString;
}
;

const PopUpDownloadClientMaster = ({ ShowPopUp, setShowPopUp }) => {
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');
    const [masterCode, setMasterCode] = useState("MT_240528");
    const [inputValue, setInputValue] = useState()
    const [tabledata, setTableData] = useState([
        {
            "CLIENT CODE": "EBC10",
            "NAME OF THE CLIENT": "Evendigits Business Advisory Pvt Ltd",
            "STRATEGY": "Mega Trends - Multicap Growth ",
            "Address 1 (max 50 char. )": "Office No. F2& F3 First Floor",
            "Address 2 (max 50 char. )": "Imperial Commercial Space Banner",
            "CITY": "Pune",
            "STATE": "Maharashtra",
            "PIN CODE": 411045,
            "Email ID": "ravi.vahadane@gmail.com",
            "Contact No": 8888991111,
            "PAN": "AAGCE1036R",
            "Family Group": null,
            "FIFO ACCOUNTING(Y/N)": "YES",
            "START DATE": "05/07/2021",
            "RESIDENT/NRI": "Resident ",
            "INDIVIDUAL/CORPORATE": "Corporate",
            "PORTFOLIO TYPE  (Discretionary/Non-Discretionary)": "Discretionary ",
            "MNGMT FEE RATE": "0.5% of Avg AUM",
            "MNGMT FEE FREQUENCY": "Monthly ",
            "HURDLE RATE": 0.08,
            "PERFORMANCE FEE RATE ": 0.2,
            "PERFORMANCE FEE FREQUENCY": "Anually from effective date",
            "CAPITAL INFLOW": 5100000,
            "DP ID No.": 20309783,
            "Custody Account No.": 9000014358,
            "Bank A/c No": "Tagged to pool bank account",
            "Pins A/c (Only For NRI)": null,
            "Distributor": "Direct"
        },
        {
            "CLIENT CODE": "NR13",
            "NAME OF THE CLIENT": "Nirmal Kishor Ramchandra",
            "STRATEGY": "Mega Trends - Multicap Growth ",
            "Address 1 (max 50 char. )": "Prabhat Dairy Pvt Ltd ",
            "Address 2 (max 50 char. )": "Taluka Rahata Ranjankhol",
            "CITY": "Ahmadnagar ",
            "STATE": "Maharashtra",
            "PIN CODE": 413720,
            "Email ID": "kishor.nirmal@prabhat-india.in",
            "Contact No": 9763727777,
            "PAN": "ADJPN3695G",
            "Family Group": null,
            "FIFO ACCOUNTING(Y/N)": "YES",
            "START DATE": "27/07/2021",
            "RESIDENT/NRI": "Resident ",
            "INDIVIDUAL/CORPORATE": "Individual ",
            "PORTFOLIO TYPE  (Discretionary/Non-Discretionary)": "Discretionary ",
            "MNGMT FEE RATE": "0.5% of Avg AUM",
            "MNGMT FEE FREQUENCY": "Monthly ",
            "HURDLE RATE": 0.08,
            "PERFORMANCE FEE RATE ": 0.2,
            "PERFORMANCE FEE FREQUENCY": "Anually from effective date",
            "CAPITAL INFLOW": 5100000,
            "DP ID No.": 20317164,
            "Custody Account No.": 9000015074,
            "Bank A/c No": "Tagged to pool bank account",
            "Pins A/c (Only For NRI)": null,
            "Distributor": "Direct"
        },
        {
            "CLIENT CODE": "JV10",
            "NAME OF THE CLIENT": "Jayraj Vahadane",
            "STRATEGY": "Mega Trends - Multicap Growth ",
            "Address 1 (max 50 char. )": "Ganesh Shobha Colony Shinde Mala Savedi Road",
            "Address 2 (max 50 char. )": "Near Old Employment telephone exchange behind Civil Hospital",
            "CITY": "Ahmadnagar",
            "STATE": "Maharashtra",
            "PIN CODE": 414003,
            "Email ID": "jayforu@gmail.com",
            "Contact No": 9545720721,
            "PAN": "ADJPV8165R",
            "Family Group": null,
            "FIFO ACCOUNTING(Y/N)": "YES",
            "START DATE": "27/07/2021",
            "RESIDENT/NRI": "Resident ",
            "INDIVIDUAL/CORPORATE": "Individual ",
            "PORTFOLIO TYPE  (Discretionary/Non-Discretionary)": "Discretionary ",
            "MNGMT FEE RATE": "0.5% of Avg AUM",
            "MNGMT FEE FREQUENCY": "Monthly ",
            "HURDLE RATE": 0.08,
            "PERFORMANCE FEE RATE ": 0.2,
            "PERFORMANCE FEE FREQUENCY": "Anually from effective date",
            "CAPITAL INFLOW": 5300000,
            "DP ID No.": 20316389,
            "Custody Account No.": 9000015013,
            "Bank A/c No": "Tagged to pool bank account",
            "Pins A/c (Only For NRI)": null,
            "Distributor": "Direct"
        },
        {
            "CLIENT CODE": "HP13",
            "NAME OF THE CLIENT": "Hemlataben Jayantkumar Patel",
            "STRATEGY": "Mega Trends - Multicap Growth ",
            "Address 1 (max 50 char. )": "10-A A.D.C Bank Staff Society B/H ShivalikPlaza",
            "Address 2 (max 50 char. )": "Nr.Panjra Pole Cross road Ambawadi",
            "CITY": "Ahmedabad",
            "STATE": "Gujarat",
            "PIN CODE": 380015,
            "Email ID": "JSPSOMA@YAHOO.COM",
            "Contact No": 9825022595,
            "PAN": "AJBPP0365G",
            "Family Group": null,
            "FIFO ACCOUNTING(Y/N)": "YES",
            "START DATE": "27/07/2021",
            "RESIDENT/NRI": "Resident ",
            "INDIVIDUAL/CORPORATE": "Individual ",
            "PORTFOLIO TYPE  (Discretionary/Non-Discretionary)": "Discretionary ",
            "MNGMT FEE RATE": "0.5% of Avg AUM",
            "MNGMT FEE FREQUENCY": "Monthly ",
            "HURDLE RATE": 0.16,
            "PERFORMANCE FEE RATE ": 0.2,
            "PERFORMANCE FEE FREQUENCY": "Anually from effective date",
            "CAPITAL INFLOW": 5000000,
            "DP ID No.": 20324119,
            "Custody Account No.": 9000015743,
            "Bank A/c No": "Tagged to pool bank account",
            "Pins A/c (Only For NRI)": null,
            "Distributor": "Trustplutus Wealth Managers ( India) Private Limited "
        },
        {
            "CLIENT CODE": "PP15",
            "NAME OF THE CLIENT": "Prasad Panchagnula VLSNV",
            "STRATEGY": "Mega Trends - Multicap Growth ",
            "Address 1 (max 50 char. )": "C 505 Purva Fountain Square",
            "Address 2 (max 50 char. )": "Near Marathahali Bridge  Munnekolala Bangalore",
            "CITY": "Bangalore",
            "STATE": "Karnataka",
            "PIN CODE": 560037,
            "Email ID": "prasad.panchagnula77@gmail.com",
            "Contact No": 9739287330,
            "PAN": "AADFP3048A",
            "Family Group": null,
            "FIFO ACCOUNTING(Y/N)": "YES",
            "START DATE": "27/07/2021",
            "RESIDENT/NRI": "Resident ",
            "INDIVIDUAL/CORPORATE": "Individual ",
            "PORTFOLIO TYPE  (Discretionary/Non-Discretionary)": "Discretionary ",
            "MNGMT FEE RATE": "0.5% of Avg AUM",
            "MNGMT FEE FREQUENCY": "Monthly ",
            "HURDLE RATE": 0.16,
            "PERFORMANCE FEE RATE ": 0.2,
            "PERFORMANCE FEE FREQUENCY": "Anually from effective date",
            "CAPITAL INFLOW": 5000000,
            "DP ID No.": 20323513,
            "Custody Account No.": 9000015694,
            "Bank A/c No": "Tagged to pool bank account",
            "Pins A/c (Only For NRI)": null,
            "Distributor": "Direct"
        }
    ]
    );
    const convertToCSV = (objArray) => {
        const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
        let str = '';
        let row = '';

        // Create headers
        const headers = Object.keys(array[0]);
        row += headers.join(',');
        str += row + '\r\n';

        // Add data rows
        for (let i = 0; i < array.length; i++) {
            let line = '';
            for (let index in array[i]) {
                if (line !== '') line += ',';
                line += array[i][index];
            }
            str += line + '\r\n';
        }

        return str;
    };
    
    // const downloadCSV = () => {
    //     const csv = convertToCSV(tabledata);
    //     const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    //     const link = document.createElement('a');
    //     const url = URL.createObjectURL(blob);

    //     link.href = url;
    //     link.setAttribute('download', 'ClientMaster.csv');
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };
    const downloadCSV = () => {
        const headers = Object.keys(tabledata[0]);
        const rows = tabledata.map(obj => headers.map(header => obj[header]));
        const csvContent = [
            headers.join(','), // Add header row
            ...rows.map(row => row.join(',')) // Add data rows
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.href = url;
        link.setAttribute('download', 'ClientMaster.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
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
                        <h1 className='text-center text-[25px] font-semibold w-full border-b-[1px]'>Client Master </h1>
                        <div className='flex justify-between py-1'>
                            
                            <form className='flex bg-gray-50  dark:bg-darkbg0 h-10 w-80 mx-2 px-2 border-[1px] dark:border-darkbg2 rounded-md'>
                                <div className="inset-y-0 start-0 flex items-center pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    id="master_code_input"
                                    type="text"
                                    className="p-2 focus:outline-none bg-gray-50 dark:bg-darkbg0 dark:text-neutral-300"
                                    placeholder="Search Master Code"
                                    value={inputValue}
                                    onChange={(e) => { setInputValue(e.target.value) }}
                                    required
                                />
                                <button type='submit' className='mx-1 bg-lightgrey dark:bg-darkbg2 dark:border-darkbg1 dark:text-neutral-300 border-[1px] p-0 px-4 rounded-md shadow-md active:bg-white active:shadow-none m-1'>Search</button>
                            </form>
                            <h1 className='p-2 relative right-10'>MasterCode: <b>{masterCode}</b></h1>
                            <button className=' px-2  rounded-md py-[1px]  bg-green-400 text-white shadow-md active:shadow-none ' onClick={downloadCSV}>Download CSV</button>
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
                                                        {stock[header]?stock[header]:"NA"}
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

export default PopUpDownloadClientMaster

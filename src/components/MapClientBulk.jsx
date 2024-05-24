import React, { useState } from 'react';
import Papa from 'papaparse';
import { mapCientBulk } from '../api';

const MapClientBulk = () => {
    const [file, setFile] = useState(null);
    const [jsonExtract, setJsonExtract] = useState();
    const [finalJsonData,setFinalJsonData]=useState();
    const keyMapping = {
        "CLIENT CODE": "client_code",
        "NAME OF THE CLIENT": "client_name",
        "STRATEGY": "strategy",
        "Address 1 (max 50 char. )": "address_1",
        "Address 2 (max 50 char. )": "address_2",
        "CITY": "city",
        "STATE": "state",
        "PIN CODE": "pincode",
        "Email ID": "email_id",
        "Contact No": "contact",
        "PAN": "pan",
        "Family Group": "family_group",
        "FIFO ACCOUNTING(Y/N)":"fifo_accounting",
        "START DATE": "start_date",
        "RESIDENT/NRI": "resident_or_nri",
        "INDIVIDUAL/CORPORATE": "individual_or_corporate",
        "PORTFOLIO TYPE (Discretionary/Non-Discretionary)": "portfolio_type",
        "MNGMT FEE RATE": "management_fee_rate",
        "MNGMT FEE FREQUENCY": "management_fee_frequency",
        "HURDLE RATE": "hurdle_rate",
        "PERFORMANCE FEE RATE": "performance_fee_rate",
        "PERFORMANCE FEE FREQUENCY": "performance_fee_frequency",
        "CAPITAL INFLOW": "capital_inflow",
        "DP ID No.": "dp_id",
        "Custody Account No.": "custody_account_no",
        "Bank A/c No": "bank_account_no",
        "Pins A/c (Only For NRI)": "pins_account_no",
        "Distributor": "distributor"
    };

    const transformKeys = (list, mapping) => {
        let transformedList = list.map(item =>
            Object.entries(mapping).reduce((acc, [oldKey, newKey]) => {
                if (newKey == "start_date"  ){
                    if(item[oldKey].includes("/")){
                        const dateParts = item[oldKey].split('/');
                        acc[newKey] = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
                        // console.log("/->",{dateParts})
                    }
                    else{
                        const dateParts = item[oldKey].split('-');
                        // console.log("-:->",{dateParts})
                        acc[newKey] = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
                    }
                  } else {
                    acc[newKey] = item[oldKey] || '';
                  }
                return acc;
            }, {})
        );
        return transformedList;
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const csvData = e.target.result;
                Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        const jsonData = result.data;
                        console.log('JSON Datad:', jsonData);
                        // setJsonExtract(jsonData);
                        let x=transformKeys(jsonData,keyMapping)
                        setFinalJsonData(x);

                    },
                });
            };
            reader.readAsText(selectedFile);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ jsonExtract })
        console.log({ finalJsonData })
        let res=mapCientBulk(finalJsonData);
        // No specific submission logic since we are handling the CSV to JSON conversion on file change
    };

    return (
        <div className="w-full flex justify-left">
            <form
                className="block p-5 pl-0 w-[500px]"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                
                <div>
                    <label htmlFor="file-upload" className="block my-3">
                        <input
                            type="file"
                            id="file-upload"
                            onChange={handleFileChange}
                            className="file-input appearance-none w-full m-[4px] border-[2px] p-3 rounded-sm focus:outline-none focus:border-bordercolor1"
                            name="file"
                            accept=".csv"
                        />
                    </label>
                </div>
                <input
                    type="submit"
                    value="Add"
                    className="cursor-pointer p-2 font-bold bg-white shadow-md rounded-md px-4 my-3 ml-1 w-28 text-gray-500"
                />
                <div className='ml-1 my-3'>
                    <span className="font-bold ">Note: </span>
                    The CSV file uploaded should be in the correct format.
                </div>
            </form>
        </div>
    );
};

export default MapClientBulk;

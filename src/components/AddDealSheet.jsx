import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addData } from '../api';

const AddDealSheet = () => {
    const navigate = useNavigate();

    const [Name, setName] = useState('');
    const [ClientCode, setClientCode] = useState('');
    const [Email, setEmail] = useState("");
    const [file, setFile] = useState(null);
    const [shownError, setShownError] = useState(null)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('csv_file', file);
        console.log({ formData });
        // try {
        //     const response = await fetch('http://127.0.0.1:8000/client_portfolio/add_client_data/', {
        //         method: 'POST',
        //         body: formData
        //     });
        //     console.log({ response })
        //     if (response.ok) {
        //         // If the response is okay, alert the user
        //         alert("Client Added")
        //     }
        //     else {
        //         // If the response is not okay, throw an error
        //         const errorMessage = await response.text();
        //         throw new Error(errorMessage);
        //     }
        // } catch (error) {
        //     console.error('Error uploading file:', error);
        //     console.log({ error });

        //     // Extract the inner HTML of the summary from the error message
        //     const match = error.message.match(/<pre class="exception_value">([\s\S]*?)<\/pre>/);
        //     const exceptionValue = match ? match[1].trim() : 'Exception value not found';
        //     if (exceptionValue.split(":")[0] == "UNIQUE constraint failed") {
        //         // alert("Cridentials already exists please enter unique crediantials")
        //         alert("Client Already Exists");
        //     }
        //     else {
        //         alert(exceptionValue.split(":")[0]);
        //     }
        // }

    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Set file when selected
    };

    return (
        <div className='w-full flex justify-left '>
            <form onSubmit={handleSubmit} className='block p-5 pl-0 w-[500px]' enctype='multipart/form-data'>
                {/* 
                <nav className='flex gap-4 items-center border-b-[1px] pb-2 mb-8'>
                    <h1 className='font-semibold text-center w-96 dark:text-neutral-300 text-gray-600'>Add Dealsheet</h1>
                </nav> */}
                <div className='mt-10 mb-4'>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className=' dark:bg-darkbg1 dark:border-darkbg2 dark:text-neutral-300 file-input appearance-none w-full m-[4px] border-[2px] p-3 rounded-sm focus:outline-none focus:border-bordercolor1'
                        // required
                        name='file'
                        accept=".csv"
                    // multiple
                    />

                </div>

                {/* <input type="submit" value="Add" className='cursor-pointer p-2 font-bold bg-gradient-to-r from-bordercolor1 to-bordercolor2 text-white rounded-md px-4 mt-7 w-full' /> */}
                {/* <input type="submit" value="Add" className='cursor-pointer p-2 font-bold bg-white shadow-md rounded-md px-4 mt-7 w-28 text-gray-500' /> */}
                <input type="submit" value="Add" className='mt-4 cursor-pointer p-2 font-bold bg-white dark:bg-neutral-600 dark:text-neutral-300 shadow-md rounded-md px-4 my-3 ml-1 w-28 text-gray-500' />
                <div className='ml-1 my-3 dark:text-neutral-200'>
                    <span className="font-bold ">Note: </span>
                    The CSV file uploaded should be in the correct format.
                </div>
            </form>

        </div>
    )
}

export default AddDealSheet;

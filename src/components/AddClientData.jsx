import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addData } from '../api';

const AddClientData = () => {
    const navigate = useNavigate();

    const [Name, setName] = useState('');
    const [ClientId, setClientId] = useState('');
    const [Email, setEmail] = useState("");
    const [file, setFile] = useState(null); // State for file
    const [shownError, setShownError] = useState(null)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', Name);
        formData.append('client_id', ClientId);
        formData.append('email', Email);
        formData.append('csv_file', file);
        console.log({ formData });
        // const res=addData(formData);

        // try {
        //     const response = await fetch('http://127.0.0.1:8000/client_portfolio/add_client_data/', {
        //         method: 'POST',
        //         body: formData
        //     });
        //     console.log({response})
        //     if (response.ok){
        //      alert("client Added")
        //     } 
        //     else {
        //         throw new Error(response.statusText);
        //     }
        // } catch (error) {
        //     console.error('Error uploading file:', error);
        //     console.log({error})
        //     if (error.message.includes('UNIQUE constraint failed')) {
        //         alert('A record with the same unique key already exists.');
        //     } else {
        //         alert('Error uploading file: ' + error.message);
        //     }
        // }

        try {
            const response = await fetch('http://127.0.0.1:8000/client_portfolio/add_client_data/', {
                method: 'POST',
                body: formData
            });
            console.log({ response })
            if (response.ok) {
                // If the response is okay, alert the user
                alert("Client Added")
            }
            else {
                // If the response is not okay, throw an error
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            console.log({ error });

            // Extract the inner HTML of the summary from the error message
            const match = error.message.match(/<pre class="exception_value">([\s\S]*?)<\/pre>/);
            const exceptionValue = match ? match[1].trim() : 'Exception value not found';
            if (exceptionValue.split(":")[0] == "UNIQUE constraint failed") {
                // alert("Cridentials already exists please enter unique crediantials")
                alert("Client Already Exists");
            }
            else {
                alert(exceptionValue.split(":")[0]);
            }
        }





    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Set file when selected
    };

    return (
        <div className='w-full flex justify-left '>
            <form onSubmit={handleSubmit} className='block p-5 pl-0 w-[500px]' enctype='multipart/form-data'>
                <div className='relative'>
                    <div>{shownError}</div>
                    <input
                        className='my-3 appearance-none  w-full m-[4px]  border-[2px] p-3 rounded-sm focus:outline-none focus:border-bordercolor1 '
                        type="text"
                        placeholder="Client Id"
                        value={ClientId}
                        onChange={(e) => setClientId(e.target.value)}
                        required
                        name='ClientId'
                    />
                </div>
                <div>
                    <input
                        className='my-3 appearance-none  w-full m-[4px]  border-[2px] p-3 rounded-sm focus:outline-none focus:border-bordercolor1 '
                        type="text"
                        placeholder="Name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        name='name'
                    />
                </div>
                <div className='relative'>
                    <input
                        className='my-3 appearance-none  w-full m-[4px]  border-[2px] p-3 rounded-sm focus:outline-none focus:border-bordercolor1 '
                        type="Email"
                        placeholder="Email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        name='Email'
                        multiple
                    />
                </div>
                <div>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className='my-3 file-input appearance-none w-full m-[4px] border-[2px] p-3 rounded-sm focus:outline-none focus:border-bordercolor1'
                        // required
                        name='file'
                        accept=".csv"
                    // multiple
                    />

                </div>

                {/* <input type="submit" value="Add" className='cursor-pointer p-2 font-bold bg-gradient-to-r from-bordercolor1 to-bordercolor2 text-white rounded-md px-4 mt-7 w-full' /> */}
                <input type="submit" value="Add" className='cursor-pointer p-2 font-bold bg-white shadow-md rounded-md px-4 mt-7 w-28 text-gray-500' />
            </form>
        </div>
    )
}

export default AddClientData;

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addData, mapCient } from '../api';

const MapClientSngle = () => {
    const navigate = useNavigate();
    // const [file, setFile] = useState(null); // State for file
    const [shownError, setShownError] = useState(null)

    

    const formFields = [
        { name: 'client_code', type: 'text', required: true },
        { name: 'client_name', type: 'text', required: true },
        { name: 'strategy', type: 'text', required: true },
        { name: 'address_1', type: 'text', required: false },
        { name: 'address_2', type: 'text', required: false },
        { name: 'city', type: 'text', required: false },
        { name: 'state', type: 'text', required: true },
        { name: 'pincode', type: 'number', required: true },
        { name: 'email_id', type: 'email', required: false },
        { name: 'contact', type: 'number', required: true },
        { name: 'pan', type: 'text', required: true },
        { name: 'family_group', type: 'text', required: true },
        { name: 'fifo_accounting', type: 'text', required: false },
        { name: 'start_date', type: 'date', required: true },
        { name: 'resident_or_nri', type: 'text', required: true },
        { name: 'individual_or_corporate', type: 'text', required: true },
        { name: 'portfolio_type', type: 'text', required: true },
        { name: 'management_fee_rate', type: 'text', required: true },
        { name: 'management_fee_frequency', type: 'text', required: true },
        { name: 'hurdle_rate', type: 'number', required: false },
        { name: 'performance_fee_rate', type: 'number', required: false },
        { name: 'performance_fee_frequency', type: 'number', required: false },
        { name: 'capital_inflow', type: 'number', required: true },
        { name: 'dp_id', type: 'number', required: true },
        { name: 'custody_account_no', type: 'number', required: true },
        { name: 'bank_account_no', type: 'number', required: true },
        { name: 'pins_account_no', type: 'number', required: true },
        { name: 'distributor', type: 'text', required: true }
    ];
    const [formData, setFormData] = useState({
        client_code: '',
        client_name: '',
        strategy: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        pincode: '',
        email_id: '',
        contact: '',
        pan: '',
        family_group: '',
        fifo_accounting:"",
        start_date: '',
        resident_or_nri: '',
        individual_or_corporate: '',
        portfolio_type: '',
        management_fee_rate: '',
        management_fee_frequency: '',
        hurdle_rate: '',
        performance_fee_rate: '',
        performance_fee_frequency: '',
        capital_inflow: '',
        dp_id: '',
        custody_account_no: '',
        bank_account_no: '',
        pins_account_no: '',
        distributor: ''
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({ formData });
        const res=mapCient(formData);
    };
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };
    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Set file when selected
    };

    return (
        <div className='w-full flex justify-left '>
            {/* <form onSubmit={handleSubmit} className='block p-5 pl-0 w-[500px] ' enctype='multipart/form-data'> */}
            <form onSubmit={handleSubmit} className=' grid grid-cols-2 p-5 pl-0 w-full' enctype='multipart/form-data'>
                {formFields.map((field, index) => (
                    <div className='relative  m-3 ml-4  ' key={index}>
                        <label className=' text-md text-gray-600 m-2 font-normal relative'>{field.name}</label>
                        <input
                        // {errors[field.name] ? 'border-red-500' : ''}
                            className={` appearance-none w-full  border-[2px] p-3 rounded-md focus:outline-none focus:border-bordercolor1`}
                            type={field.type}
                            placeholder={field.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            value={formData[field.name]}
                            onChange={handleChange}
                            name={field.name}
                            required={field.required}
                        />
                        {/* {errors[field.name] && <div className="text-red-500 text-sm mt-1">{errors[field.name]}</div>} */}
                    </div>
                ))}

                {/* <input type="submit" value="Add" className='cursor-pointer p-2 font-bold bg-gradient-to-r from-bordercolor1 to-bordercolor2 text-white rounded-md px-4 mt-7 w-full' /> */}
                <input type="submit" value="Add" className='cursor-pointer p-2 font-bold bg-white shadow-md rounded-md px-4 mt-7 w-28 text-gray-500' />
                {/* <input onClick={handleSubmit} value="testubmit" className='cursor-pointer p-2 font-bold bg-white shadow-md rounded-md px-4 mt-7 w-28 text-gray-500' /> */}
            </form>
        </div>
    )
}

export default MapClientSngle;

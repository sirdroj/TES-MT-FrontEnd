import React, { useState } from 'react';
import {  registerfunction } from '../api';
import { Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showCnfPassword, setShowCnfPassword] = useState(false);
    const togglePasswordVisibility = (i) => {
        if (i == 1) {
            setShowPassword(!showPassword);
        }
        else {
            setShowCnfPassword(!showCnfPassword);
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const userdata = { username, password, email };
        const res=registerfunction(userdata);
        
    };

    return (
        <div className=' h-full bg-gradient-to-r from-bordercolor1 to-bordercolor2 '>
            <div className='w-full flex justify-center items-center pt-14  '>
                <div className="container w-[500px] p-10 border-[1px] rounded-md shadow-md bg-bggrey">
                    <h2 className='w-full text-center font-bold text-2xl'>REGISTER</h2>
                    <form onSubmit={handleSubmit} className=' block p-5'>
                        <div>
                            <input
                                className=' my-3 appearance-none  w-full m-[4px]  border-[2px] p-3 rounded-sm focus:outline-none focus:border-bordercolor1 '
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                name='userName'
                            />

                        </div>
                        <div>
                            <input
                                className=' my-3 appearance-none  w-full m-[4px]  border-[2px] p-3 rounded-sm focus:outline-none focus:border-bordercolor1 '
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                name='Email'
                            />
                        </div>
                        <div className='relative'>
                            <input
                                className='my-3 appearance-none  w-full m-[4px]  border-[2px] p-3 rounded-sm focus:outline-none focus:border-bordercolor1 '
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                name='Password'
                            />
                            <span
                                className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer'
                                onClick={() => togglePasswordVisibility(1)}
                            >
                                show
                            </span>
                        </div>
                        <div className=' relative'>
                            <input
                                className='my-3 appearance-none  w-full m-[4px]  border-[2px] p-3 rounded-sm focus:outline-none focus:border-bordercolor1 '
                                type={showCnfPassword ? 'text' : 'password'}
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                name='ConfirmPassword'
                            />
                            <span
                                className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer'
                                onClick={() => togglePasswordVisibility(2)}
                            >
                                show
                            </span>
                        </div>
                        <input type="submit" value="Register" className=' cursor-pointer p-2 font-bold bg-gradient-to-r from-bordercolor1 to-bordercolor2 text-white rounded-md px-4 mt-7 w-full' />
                    </form>
                    <div className='w-full text-center'>Have already an account? <Link to={"/login"} ><u className=' cursor-pointer text-blue-600' >Login</u></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Register;

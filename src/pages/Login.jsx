import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginfunction } from '../api';
import { useNavigate } from 'react-router-dom';
import useStore from '../store';

const Login = () => {
    const navigate = useNavigate();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const setUserName2=useStore(state=>state.setUserName);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const userdata = { username, password };
        const res = loginfunction(userdata,navigate,setUserName2);
    };

    return (
        <div className=' h-[100vh] px-2 bg-gradient-to-r from-bordercolor1 to-bordercolor2'>
            <div className='w-full flex justify-center items-center pt-28  '>
                <div className="container w-[500px] p-10 border-[1px] rounded-md shadow-md bg-bggrey">
                    <h2 className='w-full text-center font-bold text-2xl'>LOGIN</h2>
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
                        <input type="submit" value="Login" className=' cursor-pointer p-2 font-bold bg-gradient-to-r from-bordercolor1 to-bordercolor2 text-white rounded-md px-4 mt-7 w-full' />
                    </form>
                    <div className='w-full text-center'>Don't have an account? <Link to={"/register"} ><u className=' cursor-pointer text-blue-600'>Register</u></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Login;

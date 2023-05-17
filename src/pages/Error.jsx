/* eslint-disable no-unused-vars */
import React from 'react';
import errors from "../../public/error.jpg"
import { Link } from 'react-router-dom'

        
const Error = () => {
    return (
        <div className="h-screen flex flex-col gap-0 justify-center items-center ">
            <div className='h-2/3'>
                <img className='h-full' src={errors}/>
            </div>
            <p className='text-2xl md:text-4xl font-bold mb-4 text-center'>Something Went Wrong!!</p>
            <Link to='/' className='px-2 py-1 font-semibold rounded-lg bg-sky-500 text-white'>
                Please Go Back To Homepage
            </Link>
        </div>
    );
    
};

export default Error;
import React from "react";
import "../globals.css";
import {BiUser} from "react-icons/bi";
import Link from 'next/link';

const Register = () =>{
    return (
        <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('images/bg6.jpg')" }}>
        {/* Login page */}
        <div className="bg-amber-800 border border-amber-400 rounded-md p-8 shadow-lg backdrop-blur-sm bg-opacity-30 relative ">
            <h1 className="text-4xl text-white font-bold text-center mb-6">Register</h1>
            <form action="">
                <div>
                    <p className="text-zinc-800 ">Please Create Your Metamask Account.</p>
                    <a href="https://metamask.io/download/" className="text-amber-900 hover:underline hover:text-white">Click here</a>
                </div>
            <div className=" relative my-4">
                <input type="name" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border:blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" />
                <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer=focus:-translate-y-6">Your Name</label>
                <BiUser className="absolute top-4 right-4"/>   
            </div>
            <div className=" relative my-4">
                <input type="surname" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border:blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" />
                <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer=focus:-translate-y-6">Your Surname</label>
                <BiUser className="absolute top-4 right-4"/>
            </div>
            <div className=" relative my-4">
                <input type="email" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border:blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" />
                <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer=focus:-translate-y-6">Your Email</label>
                <BiUser className="absolute top-4 right-4"/>
            </div>
            
            <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-zinc-800 hover:bg-transparent hover:border hover:text-white py-2 transition-colors duration-300" type="submit">Register</button>
            <div>
                <span className="m-4"> Already Have An Account? <Link href="/Login" className="text-blue-500">Login</Link></span>
            </div>
            </form>
        </div>
    </div>
    );
};

export default Register;
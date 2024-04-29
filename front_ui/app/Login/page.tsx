import "../globals.css";
import {BiUser} from "react-icons/bi";
import Link from 'next/link';
import Image from "next/image";

const Login = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('images/bg6.jpg')" }}>
            <div>
            <div className="bg-amber-800 border border-amber-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative ">
                <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
                <h3 className="text-2xl text-white font-bold text-center mb-6">Welcome Back</h3>
                <form action="">
                <div className=" relative my-4">
                    <input type="email" className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border:blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" />
                    <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer=focus:-translate-y-6">Your Email</label>
                    <BiUser className="absolute top-4 right-4"/>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="Remember Me">Remember Me</label>
                    </div>
                </div>
                <Link href="./LandingPage">
                <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-zinc-800 hover:bg-transparent hover:border hover:text-white py-2 transition-colors duration-300" type="submit">Login</button></Link>
                <div className="mt-10 grid grid-cols-3 items-center text-amber-800">
                    <hr className=" mb-5 text-amber-800"/>
                    <p className="mb-5 text-center text-sm">OR</p>
                    <hr className= "mb-5 text-amber-800" />
                </div>
                <button className="mb-5 bg-white border py-2 w-full rounded-full mt-5 flex justify-center items-center text-[18px]  text-zinc-800  hover:bg-transparent hover:border hover:text-white transition-colors duration-300">Login with Metamask
                <Image className="ml-3 text-sm" src="/images/metamask-icon.svg" width={25} height={25} alt=""/>
                </button>
                <div>
                    <span className=" mb-5 m-4"> New Here? <Link href="/Register" className="text-blue-500">Create an Account</Link></span>
                </div>
                </form>
            </div>
            </div>
       </div>
    );
};
export default Login;
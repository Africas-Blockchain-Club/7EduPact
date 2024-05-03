"use client"
import "../globals.css";
import {BiUser} from "react-icons/bi";
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Web3 from 'web3';

const Login = () => {

    const router = useRouter();

    useEffect(() => {
        const contractABI = [
            {
                "inputs": [
                    {
                        "internalType": "contract CourseContract",
                        "name": "_courseContract",
                        "type": "address"
                    },
                    {
                        "internalType": "contract EduPact_NFT",
                        "name": "_nftContract",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "courseName",
                        "type": "string"
                    }
                ],
                "name": "completeCourse",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "studentAddress",
                        "type": "address"
                    }
                ],
                "name": "getCourseForStudent",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "studentAddress",
                        "type": "address"
                    }
                ],
                "name": "getStudent",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "studentAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "courseName",
                        "type": "string"
                    }
                ],
                "name": "hasCompletedCourse",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "studentAddress",
                        "type": "address"
                    }
                ],
                "name": "isRegistered",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "courseName",
                        "type": "string"
                    }
                ],
                "name": "registerForCourse",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "surname",
                        "type": "string"
                    }
                ],
                "name": "registerStudent",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "contract EduPact_NFT",
                        "name": "_nftContract",
                        "type": "address"
                    }
                ],
                "name": "setNFTContract",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];
        const contractAddress = '0x2eB83e53069166c6555aF0d1F9976bEF95aaf9ef';

        const connectWallet = async () => {
            if ("https://sepolia-rpc.scroll.io") {
                try {
                    const web3 = new Web3("https://sepolia-rpc.scroll.io");
                    const contract = new web3.eth.Contract(contractABI, contractAddress);
                    const accounts = await web3.eth.requestAccounts()
                    
                    const isRegistered = await contract.methods.isRegistered(accounts[0]).call();

                    if (!isRegistered) {
                        router.push('/Register'); // Navigate to Register screen if not registered
                    } else {
                        router.push('/Courses'); // Navigate to Courses screen if registered
                    }
                } catch (error) {
                    console.error("User denied account access");
                }
            } else {
                console.error("Non-Ethereum browser detected. You should consider trying MetaMask!");
            }
        };

        connectWallet(); // Call connectWallet function when component mounts
    }, []);

    return (
        <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('images/bg6.jpg')" }}>
            <div>
            <div className="bg-amber-800 border border-amber-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative ">
                <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
                <h3 className="text-2xl text-white font-bold text-center mb-6">Welcome Back</h3>
                <form action="">
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
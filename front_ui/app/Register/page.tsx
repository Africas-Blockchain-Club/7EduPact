"use client"
import React from "react";
import "../globals.css";
import {BiUser} from "react-icons/bi";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Web3 from 'web3';

const Register = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

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

    const registerUser = async () => {
        if (!name || !surname) {
            alert('Please enter your name and surname.');
            return;
        }

        if ("https://sepolia-rpc.scroll.io") {
            try {
                const web3 = new Web3("https://sepolia-rpc.scroll.io");
                const contract = new web3.eth.Contract(contractABI, contractAddress);
                const accounts = await web3.eth.requestAccounts()
                
                // Call the registerStudent function with name, surname, and user's wallet address
                // Specify gas fees 
                await contract.methods.registerStudent(name, surname).send({ 
                    from: accounts[0],
                    gasPrice: '1000000000'});

                // Redirect to the courses screen after successful registration
                router.push('/Courses');
            } catch (error) {
                console.error("Error registering user:", error);
            }
        } else {
            console.error("Non-Ethereum browser detected. You should consider trying MetaMask!");
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('images/bg6.jpg')" }}>
            {/* Register page */}
            <div className="bg-amber-800 border border-amber-400 rounded-md p-8 shadow-lg backdrop-blur-sm bg-opacity-30 relative ">
                <h1 className="text-4xl text-white font-bold text-center mb-6">Register</h1>
                <form onSubmit={(e) => { e.preventDefault(); registerUser(); }}>
                    <div className="my-4 relative">
                        <input type="text" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border:blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <BiUser className="absolute top-4 right-4"/>
                    </div>
                    <div className="my-4 relative">
                        <input type="text" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border:blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="Your Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
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
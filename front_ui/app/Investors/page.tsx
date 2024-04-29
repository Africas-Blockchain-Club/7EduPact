import React from 'react';
import Link from "next/link";


const InvestorDetails = () => {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-no-repeat bg-cover bg-center filter blur-md overflow-auto"
            style={{ backgroundImage: "url('images/img2.png')" }}></div>
            <div className='relative text-zinc-800  text-ml lg:w-6/12 w-11/12 mx-auto flex flex-col justify-center'>
            <div className='mb-16'></div>

                <h2 className="text-2xl font-semibold mb-4 text-center">Welcome to the <span className="underline"> Investor's Platform</span></h2>
                <p className="text-justify">At <span className="font-medium text-amber-800"> PactSkillHub</span>, we believe in revolutionizing education by <span className="font-medium text-amber-800">leveraging blockchain and NFTs</span> to empower learners and reshape the future of learning. As an investor, you play a crucial role in this transformative journey,  <span className="font-medium text-amber-800"> empowering learners financially while fostering skill development and community enrichment.</span></p>
            </div>

            <hr className="mt-16 border-t-2" />


            <div className="py-20 bg-no-repeat bg-cover relative">
                <div className="text-center text-zinc-800 mb-20 text-2xl font-semibold">What Sets Us Apart?</div>
                <div className=" ml-auto mr-auto lg:flex lg:justify-between lg:w-10/12 lg:pl-15 lg:pr-15 text-justify mb-8">
                    {/* Incentives */}
                    <div className="lg:w-5/12 mb-8 lg:mb-0">
                        <div className='mb-12 '></div>
                            <h3 className="underline text-xl font-semibold">Financial Empowerment:</h3>
                                <div className='mb-4 '></div>
                                    <p className=' text-white bg-amber-800 border border-amber-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative '>
                                    By registering as an investor, you become part of our network platform where you can connect with fellow investors and contribute to the education revolution. As an investor, you have the opportunity to earn NFTs as you support learners on their educational journey. These NFTs can be traded or used for tuition fees, providing you with a tangible return on your investment in education.
                                    </p>
                        <div className='mb-16'></div>
                            <h3 className="underline text-xl font-semibold">Holistic Skill Development:</h3>
                                <div className='mb-4'></div>
                                    <p className=' text-white bg-amber-800 border border-amber-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative '>
                                    Our platform goes beyond traditional education by offering learners essential skills beyond coding. With each completed module, learners earn NFTs that recognize their achievements and encourage continuous skill development.</p>
                        <div className='mb-16'></div>
                            <h3 className="underline text-xl font-semibold">Transparent and Efficient Transactions:</h3>
                                <div className='mb-4'></div>
                                    <p className=' text-white bg-amber-800 border border-amber-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative '>
                                    Our smart contracts on <a className='hover:text-amber-800 underline font-semibold' href="https://sepolia.scroll.io/portal">Scroll Sepolia</a> ensure efficient and sustainable transactions, while verification on <a className='hover:text-amber-800 underline font-semibold' href="https://sepolia.etherscan.io/"> Scroll Etherscan</a> provides transparency and accountability.
                                    </p>
                    </div>


                <div className="lg:w-5/12">
                    <div className='mb-16'></div>
                        <h3 className="underline text-xl font-semibold">Transparent Tracking:</h3>
                            <div className='mb-4'></div>
                                <p className=' text-white bg-amber-800 border border-amber-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative '>
                                You'll have access to track the progress of the students you support. Through our platform, you can monitor their learning journey and provide support and encouragement along the way. Additionally, students receive mini-tasks from donors after completing each section of the sponsored course, allowing for personalized engagement and feedback.
                                </p>
                    <div className='mb-16'></div>
                        <h3 className="underline text-xl font-semibold">Community Enrichment:</h3>
                            <div className='mb-4'></div>
                                <p className=' text-white bg-amber-800 border border-amber-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative '>
                                By joining our donor network, you contribute to a thriving tech ecosystem and help shape the future of education. Your participation fosters community engagement and collaboration, creating opportunities for learners to connect and learn from each other.
                                </p>
                </div>
                </div>
            </div>

            <hr className="mt-16 border-t-2" />


            <div className="mt-14 lg:mt-28 relative">
        <div className="text-center md:w-9/12 w-11/12 mx-auto flex flex-col justify-center items-center py-12 lg:py-20  text-primary-dark-brown  rounded-xl">
          <h2 className="text-2xl font-semibold text-primary-dark-brown">Join The Revolution</h2>
          <p className="text-sm lg:text-base py-6 lg:w-[55ch] text-justify font-medium">Join us in transforming education and empowering learners in the digital age. Together, we can make a difference and shape the future of learning. Register as an investor today and be part of the PactSkillHub revolution.</p>
          <Link href="./Register" className="bg-amber-700 rounded-3xl py-3 px-8 font-medium inline-block mr-4 text-white hover:bg-transparent
            hover:text-zinc-800 duration-300 hover:border border border-amber-700">Join Us</Link>
        </div>
      </div>

        </div>
    );
}

export default InvestorDetails;


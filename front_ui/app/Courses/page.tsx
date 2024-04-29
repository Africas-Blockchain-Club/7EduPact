import Image from "next/image";

const Course = () => {
    return (
        <div className="relative min-h-screen">
            {/* Blur background image */}
            <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center filter blur-md"
                style={{ backgroundImage: "url('images/bg5.jpg')" }}
            ></div>

            <div className="relative z-10 p-8">
                {/* Course details */}
                <div className="w-full flex justify-center">
                    <div className="w-1/2 flex justify-center">
                        <div className="bg-white bg-opacity-60 rounded-xl p-8 flex flex-col justify-center border border-amber-700">
                            <h1 className="text-xl font-bold text-zinc-600 mb-4">Blockchain For Beginners</h1>
                            <p className="text-lg font-semibold text-zinc-600 text-justify mb-4">Unlock the future of finance with "Blockchain for Beginners," an immersive online course designed to demystify the revolutionary technology of blockchain!</p>
                            <div className="mt-4 text-zinc-600">
                                <svg aria-hidden="false" aria-label="Course Language" role="img" focusable="false" className="ud-icon ud-icon-xsmall ud-icon-color-neutral icon"></svg>
                                <span className="ml-2 mb">English</span>
                            </div>
                        </div>
                    </div>
                    {/* Course project and button */}
                    <div className="w-1/2 flex justify-center">
                        <div className="bg-white bg-opacity-60 rounded-xl p-8 flex flex-col justify-center items-center border border-amber-700">
                            <Image src="/images/course.png" width={128} height={128} alt="Course image" className="mb-4" />
                            <a href="https://www.youtube.com/watch?v=SyVMma1IkXM" className="text-white bg-amber-700 rounded-3xl py-3 px-8 font-medium inline-block hover:bg-transparent hover:text-zinc-600 duration-300 hover:border border border-amber-700">Buy Course</a>
                        </div>
                    </div>
                </div>

                {/* What you'll learn and Description */}
                <div className="w-full flex justify-center mt-8">
                    <div className="w-1/2 flex justify-center">
                        <div className="bg-white bg-opacity-60 rounded-xl p-10 border border-amber-700">
                            <h2 className="text-lg font-semibold text-zinc-600">Description</h2>
                            <p className="text-zinc-600">Requirements: <span className="font-medium">None!</span></p>
                            <ul className="text-zinc-600">
                                <li>
                                    <span className="underline text-amber-800">1. A focus on doing, not just listening.</span> The best way to reinforce a skill is to practice it yourself, and blockchain isn't any different.
                                </li>
                                <li>
                                    <span className="underline text-amber-800">2. Understanding of blockchain and how it works.</span> You will develop the required skills and knowledge about Blockchain.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <div className="bg-white bg-opacity-60 rounded-xl p-10 border border-amber-700">
                            <h2 className="text-lg font-semibold text-zinc-600">What you'll learn:</h2>
                            <ul className="list-disc list-inside text-zinc-600">
                                <li>What is Blockchain?</li>
                                <li>Its importance</li>
                                <li>Understanding the theory behind it</li>
                                <li>What is a smart contract?</li>
                                <li>Use cases of Blockchain</li>
                                <li>Advantages of smart contract</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;

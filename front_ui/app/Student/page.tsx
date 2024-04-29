import Link from "next/link";
import Image from "next/image";

const StudentDetails = () => {
  return (
    <div className="relative min-h-screen">
      {/* Blur background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center filter blur-md overflow-auto"
        style={{ backgroundImage: "url('images/img2.png')" }}></div>
      <div className=" relative z-10">
        {/* About us */}
        <div className="lg:w-6/12 w-11/12 mx-auto flex flex-col items-center justify-center text-zinc-800">
            
          <h1 className="text-4xl font-bold leading-10 mt-12 mb-4">About us</h1>
          <p>At <span className="font-bold">PactSkillHub</span>, we're on a mission to transform education for the digital era. Our platform empowers learners by providing not just knowledge, but <span className="font-bold">tangible rewards</span> like Non-Fungible Tokens (NFTs) for their achievements. We're dedicated to nurturing well-rounded skill sets that go beyond <span className="font-bold">conventional curricula</span>, ensuring every student thrives in today's fast-paced world. Through transparency, community involvement, and innovative approaches, we're reshaping the educational landscape to be inclusive, fulfilling, and impactful. Join us in redefining learning and embarking on an educational journey filled with endless possibilities.</p>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="py-20 bg-no-repeat bg-cover relative">
        <div className="lg:w-8/12 w-11/12 mx-auto flex flex-col md:flex-row justify-between md:items-center gap-14 md:h-full text-justify">
          {/* Mission */}
          <article className="md:w-5/12">
            <div className="w-[70px] h-[70px] rounded-full flex justify-center items-center"></div>
            <Image src="/student_icons/mission.png" width={64} height={64} alt="Mission Icon" />
            <h2 className="mb-3 mt-5 text-[#1A1A1A] text-4xl font-medium">Our Mission</h2>
            <p className="text-[#210D15] md:text-lg text-base">To build a community that embodies technical growth, networking, mentorship and visibility amongst all level career roles in Technology.</p>
          </article>

          {/* Vision */}
          <article className="md:w-5/12">
            <div className="w-[70px] h-[70px] rounded-full flex justify-center items-center"></div>
            <Image src="/student_icons/vision.png" width={64} height={32.0} alt="Vision Icon" />
            <h3 className="mb-3 mt-5 text-[#1A1A1A] text-4xl font-medium">Our Vision</h3>
            <p className="text-[#210D15] md:text-lg text-base">An Africa where women are equally represented across all career roles in Technology.</p>
          </article>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-20 bg-no-repeat bg-cover relative">
        {/* <Image src="/student_icons/values.png" width={64} height={64} alt="Values Icon" /> */}
        <h3 className="text-center text-4xl font-bold my-20">Our Values</h3>
        <ul className=" mt-10 flex md:flex-row flex-col gap-8 2xl:w-9/12 lg:w-10/12 md:w-11/12 mx-auto md:justify-between my-5">
          {/* Your list items here */}
          <li className="flex flex-col items-center">
                        <div className="w-50 h-50 rounded-full flex justify-center items-center my-3"></div>
                        <Image src="/student_icons/empowerment.png" width={64} height={64} alt="Mission Icon" />
                        <p className="text-lg font-medium text-zinc-800">Empowerment</p></li>
                        <li className="flex flex-col items-center">
                            <div className="w-50 h-50 rounded-full flex justify-center items-center my-3"></div>
                            <Image src="/student_icons/development.png" width={64} height={64} alt="Mission Icon" />

                            <p className="text-lg font-medium text-zinc-800">Skill Development</p></li>
                            <li className="flex flex-col items-center">
                                <div className="w-50 h-50 rounded-full flex justify-center items-center my-3"></div>
                                <Image src="/student_icons/transparency.png" width={64} height={64} alt="Mission Icon" />

                                <p className="text-lg font-medium text-zinc-800">Transparency</p></li>
                                <li className="flex flex-col items-center">
                                    <div className="w-50 h-50 rounded-full flex justify-center items-center my-3"></div>
                                    <Image src="/student_icons/community.png" width={64} height={64} alt="Mission Icon" />

                                    <p className="text-lg font-medium text-zinc-800">Community</p></li>
                                    <li className="flex flex-col items-center">
                                        <div className="w-50 h-50 rounded-full flex justify-center items-center my-3"></div>
                                        <Image src="/student_icons/sustainability.png" width={64} height={64}  alt="Mission Icon" />

                                        <p className="text-lg font-medium text-zinc-800">Sustainability</p></li>
                                    <li className="flex flex-col items-center">
                                        <div className="w-50 h-50 rounded-full flex justify-center items-center my-3"></div>
                                        <Image src="/student_icons/innovation.png" width={64} height={64} alt="Mission Icon" />

                                        <p className="text-lg font-medium text-zinc-800">Innovation</p></li>
                                    <li className="flex flex-col items-center">
                                        <div className="w-50 h-50 rounded-full flex justify-center items-center my-3"></div>
                                        <Image src="/student_icons/collaboration.png" width={64} height={24} alt="Mission Icon" />

                                        <p className="text-lg font-medium text-zinc-800">Collaboration</p></li>
        </ul>
      </div>

    <div className="mb-40"></div>
      {/* Become a member */}
      <div className="mt-14 lg:mt-28 relative">
        <div className="text-center md:w-9/12 w-11/12 mx-auto flex flex-col justify-center items-center py-12 lg:py-20  text-primary-dark-brown  rounded-xl">
          <h2 className="text-2xl font-semibold text-primary-dark-brown">Become a member</h2>
          <p className="text-sm lg:text-base py-6 lg:w-[55ch] text-justify font-medium">Become a member of PactSkillHub and be part of a vibrant community dedicated to celebrating diversity and empowering women in tech. Connect with like-minded individuals, gain access to valuable resources and events, and contribute to shaping the future of the tech industry.</p>
          <Link href="./Register" className="bg-amber-700 rounded-3xl py-3 px-8 font-medium inline-block mr-4 text-white hover:bg-transparent
            hover:text-zinc-800 duration-300 hover:border border border-amber-700">Join Us</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;

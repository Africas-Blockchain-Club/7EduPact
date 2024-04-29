
import React from "react";
import NavBar from "./Navbar";
import MainContent from "./MainContent";


const LandingPage = () => {
    return(
        <div className="container relative min-h-screen">
      {/* Background image*/}
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center filter blur-md" 
        style={{ backgroundImage: "url('images/img2.png')" }}></div>
        {/* Content Section*/}
      <div className="relative text-zinc-800 text-lg px-28 py-5">
        {/* Calling NavBar Section */}
      <NavBar />
        {/* Main Content */}
        <MainContent/>
      </div>
   </div>
    )
}

export default LandingPage;
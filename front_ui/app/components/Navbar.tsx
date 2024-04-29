import Link from "next/link";
import React from "react";

const NavBar = () => {

    return(
        <nav className="flex items-center"> 
          <img src="images/logo.png" className="w-40 cursor-pointer rounded-xl" alt="Logo" />
          <ul className="flex-1 text-center mr-28">
            {/* Navigation items */}
            <li className="list-none inline-block px-5"><a href="#" className="px-2 underline flex items-center">
              {/* Home icon */}
              <svg className="h-10 w-10 text-amber-700" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" 
                fill="none" strokeLinecap="round" strokeLinejoin="round">  
                <path stroke="none" d="M0 0h24v24H0z"/>  
                <polyline points="5 12 3 12 12 3 21 12 19 12" />  
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  
                <rect x="10" y="12" width="4" height="4" />
              </svg>Home</a>
            </li>
            <li className="list-none inline-block px-5"><Link href="./Student" className="px-2 underline flex items-center">
              {/* About icon */}
              <svg className="h-10 w-10 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              About</Link>
            </li>
            <li className="list-none inline-block px-5"><Link href="./Courses" className="px-2 underline flex items-center">
              {/* Features icon */}
              <svg className="h-8 w-8 text-amber-700"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" 
              strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />  
              <line x1="3" y1="6" x2="3" y2="19" />  <line x1="12" y1="6" x2="12" y2="19" />  <line x1="21" y1="6" x2="21" y2="19" />
              </svg>Courses</Link>
            </li>
          </ul>
  
        
          <Link href="/Login">
          <div className="text-white bg-amber-700 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent
                hover:text-zinc-800 duration-300 hover:border border border-amber-700">Login</div></Link>
            <Link href="/Register"> <div className=" text-white bg-amber-700 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent
            hover:text-zinc-800 duration-300 hover:border border border-amber-700">Sign Up</div></Link>
            
        </nav>

        
    );
}

export default NavBar;

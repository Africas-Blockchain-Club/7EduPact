import StudentDetails from "../Student/page";
import Link from "next/link";


const MainContent = () =>{
    return(
        <div className="text-zinc-800 mt-32 max-w-xl mx-auto text-center">
          <h1 className="text-6xl font-semibold leading-normal">PactSkillHub</h1>
          <p className="mx-auto text-center">A revolutionary dApp,designed by <span className="font-medium">7EduPact</span>, for tertiary students eager to develop 
            essential life skills often overlooked by traditional education systems.</p>
          <div className="mt-10 text-white">
            <Link href="./Student" className="bg-amber-700 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent
            hover:text-zinc-800 duration-300 hover:border border border-amber-700">For Students</Link>
            <Link href="./Investors" className="bg-amber-700 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent
            hover:text-zinc-800 duration-300 hover:border border border-amber-700">For Investors</Link>
          </div>
          
        </div>
    );
}

export default MainContent;
import React, { useState } from "react";
import cally from "../assets/cally.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navigation() {
    const [open, setOpen] = useState(false);
    const switches = () => {
        setOpen((prev) => !prev);
    }
  return (
    <div>
      <div className="flex items-center justify-between mx-11">
        <div className="flex items-center gap-[10px]">
          <img src={cally} alt="" width={50} className=" rounded-full ml-2" />
          <h1 className="text-3xl font-bold">Kachi</h1>
        </div>
        <div className="Desktop_Navvigation flex items-center justify-between gap-8">
          <ul className="flex items-center gap-10">
            <li className="text-lg font-bold hover:bg-gray-300 cursor-pointer">
              Home
            </li>
            <li className="text-lg font-bold hover:bg-gray-300 cursor-pointer">
              About
            </li>
            <li className="text-lg font-bold hover:bg-gray-300 cursor-pointer">
              Process
            </li>
            <li className="text-lg font-bold hover:bg-gray-300 cursor-pointer">
              Portfolio
            </li>
            <li className="text-lg font-bold hover:bg-gray-300 cursor-pointer">
              Blog
            </li>
            <li className="text-lg font-bold hover:bg-gray-300 cursor-pointer">
              Services
            </li>
          </ul>
          <button className="text-white font-bold bg-purple-600 py-2 px-6 rounded-lg">
            Contact
          </button>
        </div>
      </div>

      {/*Mobile navigation*/}
      <div className=" absolute top-8 right-4 md:hidden" onClick={()=>{}} >
      {open? (
        <AiOutlineClose size={25} onClick={() =>setOpen(false)}/>):( <AiOutlineMenu size={25} onClick={()=>setOpen(true)}/>
      )}
      </div>
      {open &&(
        <div className="md:hidden bg-purple-400 py-8">
        <ul className="grid:flex-col gap-10 ">
          <li className="text-lg font-bold bg-purple-200 m-4 p-4 rounded hover:bg-gray-300 cursor-pointer">
            Home
          </li>
          <li className="text-lg font-bold bg-purple-200 m-4 p-4 rounded hover:bg-gray-300 cursor-pointer">
            About
          </li>
          <li className="text-lg font-bold bg-purple-200 m-4 p-4 rounded hover:bg-gray-300 cursor-pointer">
            Process
          </li>
          <li className="text-lg font-bold bg-purple-200 m-4 p-4 rounded hover:bg-gray-300 cursor-pointer">
            Portfolio
          </li>
          <li className="text-lg font-bold bg-purple-200 m-4 p-4 rounded hover:bg-gray-300 cursor-pointer">
            Blog
          </li>
          <li className="text-lg font-bold bg-purple-200 m-4 p-4 rounded hover:bg-gray-300 cursor-pointer">
            Services
          </li>
        </ul>
        <button className="text-white font-bold bg-purple-600 py-2 px-6 ml-8 mx-4 rounded-lg hover:bg-purple-900">
          Contact
        </button>
      </div>

      )}
      
    </div>
  );
}

export default Navigation;

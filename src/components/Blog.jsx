import React from 'react'
import alximage from "../assets/Alximg.jpeg"
import ICTimage from "../assets/ICTimg.jpg"
import portfolioimg1 from "../assets/portfolio1.svg";
import portfolioimg2 from "../assets/portfolio2.svg";
import pageimage from "../assets/pageimg.svg"
import pageimage2 from "../assets/pageimg2.svg"
import pageimage3 from "../assets/pageimg3.svg"

function Blog() {
  return (
    <div>
    <div className=''>
    <div className='blog-header'>
    <h1 className='text-3xl font-bold flex justify-center pt-8'>Blog</h1>
    <p className='flex justify-center py-4 text-center'>There are many variations of passages of Lorem Ipsum available,<br/>
    but the majority have suffered alteration.</p>
    </div>
    <div className='blog-container'>
    <div className="">
            <div className="">
              <img src={portfolioimg1} alt="" />
            </div>
            <div className="bg-white border-[1px] border-gray-100">
              <h1 className="text-gray-400 py-4">UI-UX DESIGN</h1>
              <h1 className="text-lg font-bold pb-4">
                Product Admin Dashboard
              </h1>
              <p className="pb-4">
                Vivamus eleifend convallis ante, non pharetra libero <br />{" "}
                molestie laoreet. Donec id imperdiet lacus.
              </p>
            </div>
          </div>
          
          <div className="">
            <div >
              <img src={alximage} alt="" className=" w-[350px] mt-10" />
            </div>
            <div className="bg-white border-[1px] border-gray-100">
              <h1 className="text-gray-400 py-4">UI-UX DESIGN</h1>
              <h1 className="text-lg font-bold pb-4">
                Product Admin Dashboard
              </h1>
              <p className="pb-4">
                Vivamus eleifend convallis ante, non pharetra libero <br />{" "}
                molestie laoreet. Donec id imperdiet lacus.
              </p>
            </div>
          </div>

          <div className="">
            <div className="">
              <img src={ICTimage} alt="" />
            </div>
            <div className="bg-white border-[1px] border-gray-100">
              <h1 className="text-gray-400 py-4">UI-UX DESIGN</h1>
              <h1 className="text-lg font-bold pb-4">
                Product Admin Dashboard
              </h1>
              <p className="pb-4">
                Vivamus eleifend convallis ante, non pharetra libero <br />{" "}
                molestie laoreet. Donec id imperdiet lacus.
              </p>
            </div>
          </div>

          <div className="">
            <div className="">
              <img src={portfolioimg2} alt="" />
            </div>
            <div className="bg-white border-[1px] border-gray-100">
              <h1 className="text-gray-400 py-4">UI-UX DESIGN</h1>
              <h1 className="text-lg font-bold pb-4">
                Product Admin Dashboard
              </h1>
              <p className="pb-4">
                Vivamus eleifend convallis ante, non pharetra libero <br />{" "}
                molestie laoreet. Donec id imperdiet lacus.
              </p>
            </div>
          </div>
          </div>
    </div>
    <div className=' flex items-center justify-center gap-4 py-8'>
    <img src={pageimage} alt="" />
    <img src={pageimage2} alt="" />
    <img src={pageimage3} alt="" />
    <img src={pageimage3} alt="" />
    </div>
    

    </div>
  )
}

export default Blog
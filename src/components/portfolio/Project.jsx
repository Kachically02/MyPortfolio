import React from "react";
import {Link} from 'react-router-dom'
import kitchenapp from "../../assets/kitchenapp.png";
import Nexcentweb from "../../assets/Nexcentweb.png";
import Carserraweb from "../../assets/Carserraweb.png";

import "./portfolio.css";

function Project() {
  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold text-center pt-10">Projects</h1>
        <p className="text-center pt-4">Some of My works</p>
      </div>
      <div>
        <div className="portfolio-container p-10 grid grid-cols-1 justify-items-center  lg:grid-cols-3 gap-6 ">
          <a href="https://kitchen-app-two.vercel.app/">
        <div className="">
            <div className="">
              <img src={kitchenapp} alt="" />
            </div>
            <div className="bg-white border-[1px] border-gray-100">
              <h1 className="text-gray-400 py-4">DECAMEAL WEBSITE</h1>
              <h1 className="text-lg font-bold pb-4">
                Kitchen App Landing Page
              </h1>
              <p className="pb-4">
                I designed a responsive landing page of DECAMEAL website using
                HTML, CSS, Bootstrap and Reactjs using the Figma Design. Still
                working on the other pages to make it a full working website
              </p>
            </div>
          </div>
          </a>
          <a href="https://kachibasic-web-project.vercel.app/">
          <div className="">
            <div className="">
              <img src={Nexcentweb} alt="" />
            </div>
            <div className="bg-white border-[1px] border-gray-100">
              <h1 className="text-gray-400 py-4">NEXCENT WEBSITE</h1>
              <h1 className="text-lg font-bold pb-4">Nexcent Landing Page</h1>
              <p className="pb-4">
                I designed a responsive landing page of Nexcent Website using
                React, Vite and Tailwind CSS using the Figma Design.
              </p>
            </div>
          </div>
          </a>
          <a href="https://kachicaserraclone.vercel.app/">
          <div className="">
            <div className="">
              <img src={Carserraweb} alt="" />
            </div>
            <div className="bg-white border-[1px] border-gray-100">
              <h1 className="text-gray-400 py-4">CARSERRA WEBSITE</h1>
              <h1 className="text-lg font-bold pb-4">
                Landing Page for Carserra
              </h1>
              <p className="pb-4">
                I designed a responsive landing page of CARSERRA website using
                React, Vite and Tailwind CSS using the Figma Design
              </p>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

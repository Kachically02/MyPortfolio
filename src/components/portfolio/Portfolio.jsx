import React from "react";
import portfolioimg1 from "../../assets/portfolio1.svg";
import portfolioimg2 from "../../assets/portfolio2.svg";
import portfolioimg3 from "../../assets/portfolio3.svg";
import portfolioimg4 from "../../assets/portfolio4.svg";
import portfolioimg5 from "../../assets/portfolio5.svg";
import portfolioimg6 from "../../assets/portfolio6.svg";
import arrowimg from "../../assets/arrow.svg";
import "./portfolio.css"

function Portfolio() {
  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold text-center pt-10">Projects</h1>
        <p className="text-center pt-4">
          There are many variations of passages of Lorem Ipsum available, <br />
          but the majority have suffered alteration.
        </p>
      </div>
      <div>
        <div className="portfolio-container ">
          <div className="">
            <div className="">
              <img src={portfolioimg1} alt="" />
            </div>
            <div className="bg-white border-[1px] border-gray-100">
              
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
              <h1 className="text-gray-400 py-4">WEB DEVELOPMENT</h1>
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
              <img src={portfolioimg3} alt="" />
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
    </div>
  );
}

export default Portfolio;

import React from "react";
import kachi from "../../assets/kachi.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaDribbble, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import downloadicon from "../../assets/downloadicon.svg";
import { Link } from "react-dom";
import "./profile.css"

function Profile() {
  return (
    <div>
      <div className="Background_image ">
        <div className="profile-container ">
            <div className="title-container ">
              <h1>Hello, I’m Calistus Onyekachukwu</h1>
              <p>
                I'm a Freelance Software Engineer based in Anambra, Nigeria.
                <br /> I strives to build immersive and beautiful web
                applications <br />
                through carefully structured Codes. I am also an IT instructor{" "}
                <br />
                and graphics Designer.
              </p>
             <a href="https://wa.me/2348155379558"><button className="bg-purple-500" >Say Hello!</button></a> 
            </div>
          <div className=" Profile_pics">
            <img src={kachi} alt="" />
          </div>
        </div>
        <div className="Portfolio-container">
          <div className="wrapper">
              <div className="picture-img">
                <img src={kachi} alt="" />
              </div>
            <div className="description-container">
              <h1>
                I am Professional
                 Software Engineer
              </h1>
              <p>
                I render web development services for
                customers specializing creating modern websites,
                web services and online stores. My passion is to design
                amazing websites.{" "}
              </p>
              <p>
                {" "}
                I design and develop services for customers specializing
               creating stylish, modern websites, web services.
              </p>
              <div className="button-container1">
                <button className="bg-purple-600 text-white">My Project</button>
                <button className="flex items-center gap-2 border-purple-600 border-[2px]">
                  <img src={downloadicon} alt="" />
                  <p>Download CV</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

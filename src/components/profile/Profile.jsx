import React from "react";
import onyekachi1 from "../../assets/onyekachi1.jpg";
import onyekachi2 from "../../assets/onyekachi2.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaDribbble, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import downloadicon from "../../assets/downloadicon.svg";
import { Link } from "react-dom";
import "./profile.css";

function Profile() {
  return (
    <div>
      <div className="Background_image ">
        <div className="profile-container p-6 grid grid-cols-1 justify-items-center  lg:grid-cols-2 ">
          <div className="title-container ">
            <h1 className="home_title">Hello, I’m Calistus Onyekachukwu</h1>
            <p>
              I'm a Frontend Software Engineer. I strives to build immersive and
              beautiful web applications through carefully structured Codes. I
              am also an IT instructor <br />
              and graphics Designer.
            </p>
            <a href="https://wa.me/2348155379558">
              <button className="bg-purple-500">Say Hello!</button>
            </a>
          </div>
          <div className=" Profile_pics">
            <img src={onyekachi1} alt="" />
          </div>
        </div>
        <div className="wrapper p-10 grid grid-cols-1 justify-items-center  lg:grid-cols-2">
          <div className="picture-img">
            <img src={onyekachi2} alt="" />
          </div>
          <div className="description-container">
            <h1>I am Frontend Software Developer</h1>
            <p>
              My background in HTML, CSS, Javascript, Bootstrap, Tailwind CSS and React gives me a comprehensive
              understanding of frontend Web development, allowing me to adapt seamlessly
              to different project requirements. I' ve honed my skills in
              writing clean and reusable code, ensuring that the solutions I
              provide are not just functional but also maintainable in the long
              run. I bring a collaborative and positive mindset to any team I
              join. I' m not just open to change; I actively seek impactful
              opportunities to contribute and grow. My excellent reputation for
              integrity and productivity reflects my commitment to delivering
              quality work and fostering a positive team environment.
            </p>
            {/* <div className="button-container1">
              <button className="bg-purple-600 text-white">My Project</button>
              <button className="flex items-center gap-2 border-purple-600 border-[2px]">
                <img src={downloadicon} alt="" />
                <p>Download CV</p>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

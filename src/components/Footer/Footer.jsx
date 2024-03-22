import React from "react";
import cally from "../../assets/cally.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaDribbble, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import "./footer.css";

function Footer() {
  return (
    <div>
      <div className="container-rapper">
        <div className="contact-container">
          <div className="">
            <div className="discussion-container">
              <h1>Let’s discuss your Project</h1>
              <p>
                There are many variations of passages of Lorem Ipsu
                <br /> available. but the majority have suffered alte.
              </p>
            </div>
            <div className="address-cards">
              <div className="card-details">
                <div>
                  <CiLocationOn className="card-icon" />
                </div>
                <div>
                  <h1>Address:</h1>
                  <p>Awka, Anambra State</p>
                </div>
              </div>
              <div className="card-details">
                <div>
                  {" "}
                  <AiOutlineMail className="card-icon" />
                </div>
                <div>
                  <h1>My Email:</h1>
                  <p>kachically89@gmail.com</p>
                </div>
              </div>
              <div className="card-details">
                <div>
                  {" "}
                  <FiPhoneCall className="card-icon" />
                </div>
                <div>
                  <h1>Call Me Now:</h1>
                  <p>000-0000-0000</p>
                </div>
              </div>
            </div>
            <div className="social-media flex grid:flex-col gap-4 py-8">
              <a href="https://www.facebook.com/ugwuoke.calistus">
                {" "}
                <FaFacebook className="card-icon" />
              </a>
              <FaDribbble className="card-icon" />
              <a href="https://twitter.com/UgwuokeCalistu1?t=-qJaa4HP3xA2Qd0fI0FL_A&s=08">
                {" "}
                <FaXTwitter className="card-icon" />
              </a>
              <a href="https://instagram.com/_kachically?igshid=ZGUzMzM3NWJiOQ==">
                {" "}
                <FaInstagram className="card-icon" />{" "}
              </a>
              <a href="https://github.com/Kachically02">
                <FaGithub className="card-icon" />
              </a>
              <a href="https://www.linkedin.com/in/calistus-onyekachukwu">
                <FaLinkedin className="card-icon" />{" "}
              </a>
            </div>
          </div>
          <div className="user-information">
            <p>
              There are many variations of passages of Lorem Ipsu available,
              <br /> but the majority have suffered alte.
            </p>
            <form>
              <div>
                <label for="name" className="form-label">
                  Name*
                </label>
                <br />
                <input
                  type="text"
                  id="Name"
                  placeholder="Type your name"
                  className="form-input"
                />
              </div>

              <div>
                <label for="email" className="form-label">
                  Email*
                </label>
                <br />
                <input
                  type="text"
                  id="email"
                  placeholder="Type your email"
                  className="form-input"
                />
              </div>

              <div>
                <label for="location" className="form-label">
                  Location*
                </label>
                <br />
                <input
                  type="text and number"
                  id="location"
                  placeholder="Type your location"
                  className="form-input"
                />
              </div>

              <div className=" budget-input">
                <div>
                  <label for="budget" className="form-label">
                    Budget*
                  </label>
                  <br />
                  <input
                    type="text"
                    id="budget"
                    placeholder="what is your budget"
                    className="form-input"
                  />
                </div>
                <div>
                  <label for="name" className="form-label">
                    Subject*
                  </label>
                  <br />
                  <input
                    type="text"
                    id="subject"
                    placeholder="Type your subject"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label for="message" className="form-label">
                  Message
                </label>
                <br />
                <input
                  type="text"
                  id="message"
                  placeholder="Type your message"
                  className="form-input"
                />
              </div>
              <button className="flex grid:flex-col  bg-purple-700 text-white p-4 hover:bg-purple-900 gap-3 text-xl rounded my-5">
                Submit <AiOutlineSend />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="nav-footer">
          <div className="nav-image-container">
            <img src={cally} alt="" width={50} className=" rounded-full ml-2" />
            <h1 className="text-3xl font-bold">Kachi</h1>
          </div>
          <div className="">
            <ul className="list-item-container">
              <li className="">Home</li>
              <li className="">About</li>
              <li className="">Process</li>
              <li className="">Portfolio</li>
              <li className="">Blog</li>
              <li className="">Services</li>
            </ul>
          </div>
          <p>Copyright © 2023 Kachi.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

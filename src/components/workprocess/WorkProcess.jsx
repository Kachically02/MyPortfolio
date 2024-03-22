import React from "react";
import processlogo1 from "../../assets/process1.svg";
import processlogo2 from "../../assets/process2.svg";
import processlogo3 from "../../assets/process3.svg";
import processlogo4 from "../../assets/process4.svg";
import "./workprocess.css"
const WorkProcess = () => {
  return (
    <div>
      <div className="workprocess">
        <div className="workprocess-container">
          <h2>Work Process</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <br/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
          arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
          eget lorem ac vestibulum. Suspendis imperdiet,
        </p>
        </div>
        <div className="work-wrapper">
          <div className="box-container ">
          <img src={processlogo1} alt="" className="wrapper-icon1" />
          <h1>1. Research</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
          </div>
          <div className="box-container">
          <img src={processlogo2} alt="" className="box-icon"/>
          <h1>2. Analyze</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
          </div>
        
          <div className="box-container">
          <img src={processlogo3} alt="" className="box-icon" />
          <h1>3. Design</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
          </div>

          <div className="box-container">
          <img src={processlogo4} alt="" className="box-icon"/>
          <h1>4. Launch</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;

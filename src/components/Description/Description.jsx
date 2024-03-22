import React from "react";
import "./description.css"

function Description() {
  return (
      <div className="container-wrapper">
        <div className="container">
        <div className="title">
          <h1>What I Do?</h1>
          <p>
            What I do? Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.
            <br />
            Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet, Lorem
            <br />
            ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu,
            <br />
            varius eget velit non. Say Hello!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            <br />
            arcu, varius eget velit non.
          </p>
         <a href="https://wa.me/2348155379558"> <button className="bg-purple-500">Say Hello!</button></a>
        </div>
        <div className="services-container">
          <div className="what-to-do-card1">
            <h1>User Experience (UX)</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci.<br/> Mauris
              ultrices eget lorem ac vestibulum.
            </p>
          </div>
          <div className="what-to-do-card">
          <h1>User Interface (UI)</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci.<br/> Mauris
              ultrices eget lorem ac vestibulum.
            </p>
          </div>
          <div className="what-to-do-card">
          
          <h1>Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci.<br/> Mauris
              ultrices eget lorem ac vestibulum.
            </p></div>
        </div>
        </div>
      </div>
    
  );
}

export default Description;

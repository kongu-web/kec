import React from "react";
import "./PageUnderDevelopement.css";

const PageUnderDevelopement = () => {
  return (
    <div className="developing-container">
      <div className="content">
        <h1 className="title">Page Under Development</h1>
        <p className="description">
          We're working hard to bring you something amazing. Stay tuned for updates!
        </p>
        <div className="animation">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default PageUnderDevelopement;

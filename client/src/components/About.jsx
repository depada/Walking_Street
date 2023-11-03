import React from "react";
import "../styles/About.css";
import axeThrowing from "../assets/axeThrowing.mp4";
import trigger from "../assets/trigger.mp4";
import vr from "../assets/vr.mp4";

const About = () => {
  return (
    <div id="about">
      <div className="content-container">
        <video loop autoPlay muted src={axeThrowing}></video>

        <div>
          <h2>axe throwing content</h2>
        </div>
      </div>
      <div className="content-container">
        <div>
          <h2>trigger content</h2>
        </div>

        <video loop autoPlay muted src={trigger}></video>
      </div>
      <div className="content-container">
        <video loop autoPlay muted src={vr}></video>
        <div>
          <h2>vr content</h2>
        </div>
      </div>
      <div className="content-container">
        <div>
          <h2>axe throwing content</h2>
        </div>
        <div>video</div>
      </div>
    </div>
  );
};

export default About;

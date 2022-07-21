/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Homepage.css";
import Three from "../common/Three/Three";
import { AiFillLinkedin, AiFillGithub, } from "react-icons/ai";
import { BsCamera2 } from "react-icons/bs";

export const Homepage = () => {
  return (
    <section className="landing">
      <div className="home">
        <h2>HELLO, IM</h2>
        <h2 className="logo-home"> mike mundia</h2>
        <h2 className="title-home"> DEVELOPER + ACTOR + PHOTOGRAPHER</h2>
        <a href="https://github.com/mike10911" target= '_blank'><AiFillGithub size='3rem'/></a>
        <a href="https://www.linkedin.com/in/michael-mundia/" target='_blank'><AiFillLinkedin size='3rem'/></a>
        <a href="https://mikemundia.wordpress.com/" target='_blank'><BsCamera2 size='3rem'/></a>
      </div>
      <div className="Threes">
        <div className="three1">
          <Three titleName="DEVELOPER" />
        </div>
        <div className="three2">
          <Three titleName="ACTOR" />
        </div>
        <div className="three3">
          <Three titleName="PHOTGRAPHER" />
        </div>
      </div>
    </section>
  );
};

export default Homepage;

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
        <AiFillGithub size='3rem'/>
        <AiFillLinkedin size='3rem'/>
        <BsCamera2 size='3rem'/>
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

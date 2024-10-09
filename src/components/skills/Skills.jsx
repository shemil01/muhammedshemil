import React from 'react';
import "./skill.scss";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "../constant/constant";

import SkillDataProvider from "./SkillDataProvider";
import SkillText from "./SkillText";


const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      {/* <SkillText /> */}
<h1>Skills</h1>
      <div className="skills-container">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="skills-container">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      
      <div className="skills-container">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      
      <div className="skills-container">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      
      <div className="skills-container">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="skills-background">
        <div className="background-video">
          <video
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/public/public_cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

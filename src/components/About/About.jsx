import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.png";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div id='AboutMe' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        
        <img
  src={theme_pattern}
  className="w-14 h-14 mix-blend-lighten"
  alt="butterfly"
/>

      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate Full-Stack Developer with a B.Sc. in Computer Science. My technical journey is fueled by a deep interest in building scalable, efficient web applications.
            </p>
            <p>
               I specialize in developing robust back-end systems while crafting seamless user interfaces using React.js.
                  I am driven by the challenge of solving complex problems and am eager to contribute to innovative projects that push the boundaries of modern web development.

            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "100%" }} /></div>
            <div className="about-skill"><p>React Js</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Java</p><hr style={{ width: "100%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achivement">
          <h1> 4+</h1>
          <p>COURSE COMPLETED</p></div>
          <hr/>
           <div className="about-achivement">
          <h1> 15+</h1>
          <p>PROJECTS COMPLETED</p></div>
          <hr />
           <div className="about-achivement">
          <h1> 10+</h1>
          <p>TECHNOLOGIES LEARNED</p></div>

      </div>
    </div>
  );
};

export default About;

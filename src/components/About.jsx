import React from "react";
import notebook from "../assests/assignment_black_24dp 1.png";
import edit from "../assests/edit_pencil.svg";

const About = () => {
  return (
    <div style={{backgroundColor:'white',borderRadius:'6px',border:'1px solid lightgray',margin:'20px 0'}} className="about_main">
      <div className="aaaa">
        <div style={{padding:'10px'}} className="about-section">
          <img  src={notebook} alt="" className="notebook" />
          <p className="about-me">About Me</p>
        </div>
        <div style={{padding:'10px'}}>
          <img  src={edit} alt="edit" className="edit_image" />
        </div>
      </div>
      <div className="description">
        <p style={{padding:'10px',fontWeight:'400 '}}>
          I am well-versed in frontend frameworks such as React and have a good
          grasp of backend technologies including Node.js and Express.js. I have
          also gained exposure to databases like MongoDB and MySQL, enabling me
          to design and implement efficient data models. I am constantly
          learning and exploring new technologies to stay updated with the
          latest trends in the industry.
        </p>
      </div>
    </div>
  );
};

export default About;

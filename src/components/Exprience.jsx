import React from "react";
import Bag from "../assests/bussiness-bag.svg";
import Plus from "../assests/plus.svg";
import edit from '../assests/edit_pencil.svg';

const Exprience = () => {
  return (
   <div className="work-exe">
    <div style={{display:'flex' ,justifyContent:'space-between',alignItems:'start'}}>
      <div style={{display:'flex' ,gap:'10px'}}>
        <img src={Bag} alt="Bag" style={{background:'green',borderRadius:'6px',padding:'5px'}}/>
        <p style={{margin:'0'}}>Work Experience</p>
      </div>
      <div>
        <img src={Plus} alt="plus" style={{border:'1px solid #AFBACA' ,borderRadius:'50%',padding:'5px',width:'20px'}} />
      </div>
    </div>
    <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
      <p style={{fontWeight:'500',margin:'10px 0 2px 0'}}>LineupX</p>
      <img src={edit} alt="edit" style={{width:'20px'}} />
    </div>
    
    <div>
      <p style={{color:'#1C222B',margin:'0'}}>Frontend Developer <span style={{fontWeight:'bold'}}>&bull; Internship</span></p>
    </div>

    <div>
      <p style={{color: '#5E718D',fontWeight:'400',margin:'3px 0'}}>Feb 2023 - Present (6 months)</p>
    </div>
    <div>
      <p style={{color:'#5E718D' ,fontWeight:'400',margin:'5px 0'}}>In this internship, I was part of the UI Design team. I got to work closely with stakeholders of the company in doing the user research & creating mockups. I was working on the design changes to be made for the website by coding in html, css and javascript. I learned and gained a lot of experience and knowledge about the core of UX and UI.</p>
    </div>
   </div>
  );
};

export default Exprience;

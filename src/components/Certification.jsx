import React from "react";
import Certi from "../assests/certification.svg";
import Plus from "../assests/plus.svg";
import edit from "../assests/edit_pencil.svg";
import linkk from '../assests/Link.svg';

const Certification = () => {
  return (
    <div className="certi_main">

    <div className="certification">
      <div className="header">
        <img src={Certi} alt="certi" className="certi_image" />
        <p className="certi_para">Certifications</p>
      </div>
      <div>
        <img src={Plus} alt="plus" className="certi_plus" />
      </div>
    </div>

    <div style={{textAlign:'left' ,width:'100%',display:'flex',gap:'20px'}}>
        <p style={{fontWeight:'500' ,margin:'0',fontSize:'15px'}}>Coursera</p>
        <img src={edit} alt="edit" style={{width:'20px'}} />
    </div>
    <div style={{width:'100%',textAlign:'left'}}>
        <p style={{margin:'5px 0',fontSize:'12px',textAlign:'left'}}>Web Development Bootcamp</p>
        <p style={{margin:'5px 0',color: '#5E718D'}}>Jan 2023 - Jun 2023</p>
    </div>

    <div style={{textAlign:'left' ,width:'100%',display:'flex',gap:'10px'}}>
        <img src={linkk} alt="link" style={{width:'20px'}}/>
        <p style={{margin:'0' ,color: '#463987' ,fontWeight:'500',cursor:'pointer'}}>Show Certificate</p>
    </div>
    </div>
  );
};

export default Certification;

import React from "react";
import projectLinks from '../assests/certification.svg';
import githhub from '../assests/Github 1.png';
import linkedin from '../assests/LI 1.png';
import dribble from '../assests/Dribbble 1.png';
import behnace from '../assests/Behance 1.png';
import linkk from '../assests/whitelink.svg';
import Plus from "../assests/whiteplus.svg";




const ProjectLinks = () => {
  return (
    <div className="project_main">

    <div style={{display:'flex',gap:'15px',textAlign:'left',width:'100%'}}>
        <img src={projectLinks} alt="projectlink" style={{background:'#2797FF',width:'25px',borderRadius:'5px'}}/>
        <p style={{margin:'0',fontWeight:'500'}}>Project Links</p>
    </div>

    <div style={{display:'flex',width:'100%',textAlign:'left',alignItems:'center',justifyContent:'space-between',border:'2px solid #D7DFE9',padding:'10px',borderRadius:'10px',margin:'5px 2px'}}>
      <div style={{display:"flex",gap:'5px',alignItems:'center',width:'100%',textAlign:'left'}}>
        <img src={githhub} alt="github" style={{width:'20px',}}/>
        <p style={{fontWeight:'500',margin:'0'}}>Github</p>
      </div>

      <div>
        <img src={Plus} alt="plus" style={{width:'15px',background:'#7B61FF',padding:'2px',borderRadius:'50%'}}/>
      </div>
    </div>

    <div style={{backgroundColor:'#F2F5FF',width:'100%',margin:'5px 0 15px',padding:'8px',borderRadius:'5px',textAlign:'left'}}>
      <div style={{display:'flex',gap:'5px',alignItems:'center'}}>
        <img src={linkedin} alt="linkedin" style={{width:'18px'}} />
        <p style={{fontWeight:'500',margin:'0',fontSize:'13px'}}>Linkedin</p>
      </div>
    </div>

    <div style={{display:'flex',width:'100%',textAlign:'left',alignItems:'center',justifyContent:'space-between',border:'2px solid #D7DFE9',padding:'10px',borderRadius:'10px',margin:'5px 2px'}}>
      <div style={{display:"flex",gap:'6px',alignItems:'center',width:'100%',textAlign:'left'}}>
        <img src={dribble} alt="github" style={{width:'20px',}}/>
        <p style={{fontWeight:'500',margin:'0'}}>Dribble</p>
      </div>

      <div>
        <img src={Plus} alt="plus" style={{width:'15px',background:'#7B61FF',padding:'2px',borderRadius:'50%'}}/>
      </div>
    </div>

    <div style={{display:'flex',width:'100%',textAlign:'left',alignItems:'center',justifyContent:'space-between',border:'2px solid #D7DFE9',padding:'10px',borderRadius:'10px',margin:'5px 2px'}}>
      <div style={{display:"flex",gap:'5px',alignItems:'center',width:'100%',textAlign:'left'}}>
        <img src={behnace} alt="github" style={{width:'20px',}}/>
        <p style={{fontWeight:'500',margin:'0'}}>Behance</p>
      </div>

      <div>
        <img src={Plus} alt="plus" style={{width:'15px',background:'#7B61FF',padding:'2px',borderRadius:'50%'}}/>
      </div>
    </div>

    <div style={{display:'flex',width:'100%',textAlign:'left',alignItems:'center',justifyContent:'space-between',border:'2px solid #D7DFE9',padding:'10px',borderRadius:'10px',margin:'5px 2px'}}>
      <div style={{display:"flex",gap:'5px',alignItems:'center',width:'100%',textAlign:'left'}}>
        <img src={linkk} alt="github" style={{width:'20px',background:'gray',borderRadius:'50%',padding:'2px'}}/>
        <p style={{fontWeight:'500',margin:'0',width:'100%',fontSize:'15px'}}>Other Links</p>
      </div>

      <div>
        <img src={Plus} alt="plus" style={{width:'15px',background:'#7B61FF',padding:'2px',borderRadius:'50%'}}/>
      </div>
    </div>
    </div>
  )
};

export default ProjectLinks;

import React from "react";
import Resumee from '../assests/certification.svg';
import document from '../assests/description.svg';
import download from '../assests/file_download_black_24dp.svg';
import deletee from '../assests/delete.svg';



const Resume = () => {
  return (
    <div className="resume_main">
        <div style={{display:'flex',gap:'15px',textAlign:'left',width:'100%'}}>
            <img src={Resumee} alt="Resumee" style={{background:'#F261FF',width:'25px',borderRadius:'5px'}}/>
            <p style={{margin:'0',fontWeight:'500'}}>Resume</p>
        </div>

        <div style={{display:'flex',gap:'10px',alignItems:'center',width:'100%',border:'1px solid #D7DFE9',borderRadius:'8px',marginTop:'10px',padding:'4px'}}>
            <div style={{display:'flex',gap:'5px'}}>
                <img src={document} alt="document" style={{width:'25px'}}/>
                <p style={{margin:'15px 0'}}>Arbaz_K...</p>
            </div>
            <div style={{display:'flex',justifyItems:'center',alignItems:'center',gap:'8px'}}>
                <img src={download} alt="" style={{width:'22px',border:'1px solid #AFBACA', borderRadius:'50%', padding:'5px',cursor:'pointer' }}/>
                <img src={deletee} alt="" style={{width:'22px',border:'1px solid #AFBACA', borderRadius:'50%', padding:'5px',cursor:'pointer' }}/>
            </div>
        </div>

        <div style={{width:'100%',border:'3px dotted #AFBACA',borderRadius:'8px',marginTop:'10px',padding:'10px',textAlign:'center'}}>
            <p style={{border:'2px solid #7B61FF',padding:'12px',color:'#7B61FF',borderRadius:'8px',cursor:'pointer'}}>Update Resume</p>
        </div>


    </div>
  )
};

export default Resume;

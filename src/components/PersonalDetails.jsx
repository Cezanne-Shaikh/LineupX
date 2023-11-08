import React from "react";
import person from "../assests/personal.svg";
import edit from "../assests/edit_pencil.svg";

const PersonalDetails = () => {
  return (
    <div className="personal_main">
      <div style={{display:'flex' ,alignItems:'center',justifyContent:'space-between',gap:'10px',width:'100%'}}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={person}
            alt="person"
            style={{
              background: "#FF3838",
              width: "22px",
              borderRadius: "5px",
            }}
          />
          <p style={{ fontSize: "15px", fontWeight: "500" }}>
            Personal Details
          </p>
        </div>
        <div>
          <img src={edit} alt="edit" style={{ width: "20px",border:'1px solid #AFBACA',borderRadius:'50%',padding:'5px' }} />
        </div>
      </div>

      <div style={{width:'100%'}}>
        <p style={{color:'#5E718D',fontWeight:'400',margin:'0'}}>Date of birth</p>
        <p style={{fontWeight:'500',margin:'2px 0'}}>08 May 1998</p>
      </div>

      <div style={{width:'100%'}}>
        <p style={{color:'#5E718D',fontWeight:'400',margin:'5px 0 0'}}>Address</p>
        <p style={{fontWeight:'500',margin:'2px 0'}}>20, SPTBI, near Bhavans College, Azad Nagar, Andheri West</p>
      </div>

      <div style={{width:'100%'}}>
        <p style={{color:'#5E718D',fontWeight:'400',margin:'5px 0 0'}}>Gender</p>
        <p style={{fontWeight:'500',margin:'2px 0'}}>Male</p>
      </div>

      <div style={{width:'100%'}}>
        <p style={{color:'#5E718D',fontWeight:'400',margin:'5px 0 0'}}>Languages Known</p>
        <p style={{fontWeight:'500',margin:'2px 0'}}>English, Hindi, Marathi, Tamil</p>
      </div>

      <div style={{width:'100%'}}>
        <p style={{color:'#5E718D',fontWeight:'400',margin:'5px 0 0'}}>State</p>
        <p style={{fontWeight:'500',margin:'2px 0'}}>Maharashtra</p>
      </div>

      <div style={{width:'100%'}}>
        <p style={{color:'#5E718D',fontWeight:'400',margin:'5px 0 0'}}>Country</p>
        <p style={{fontWeight:'500',margin:'2px 0'}}>India</p>
      </div>
    </div>
  );
};

export default PersonalDetails;

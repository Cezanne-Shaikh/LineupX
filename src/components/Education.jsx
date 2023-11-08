import React from "react";
import EducationHat from "../assests/education.svg";
import Plus from "../assests/plus.svg";
import edit from "../assests/edit_pencil.svg";

const Education = () => {
  return (
    <div className="education_main">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <img
            src={EducationHat}
            alt="Education"
            style={{
              background: "#463987",
              borderRadius: "6px",
              padding: "5px",
            }}
          />
          <p style={{ margin: "0" }}>Education</p>
        </div>
        <div>
          <img
            src={Plus}
            alt="plus"
            style={{
              border: "1px solid #AFBACA",
              borderRadius: "50%",
              padding: "5px",
              width: "20px",
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <p style={{ fontWeight: "500" ,margin:'0'}}>JaiHind College</p>
        <img src={edit} alt="edit" style={{ width: "20px" }} />
      </div>

      <div>
        <p style={{color:'#1C222B', fontWeight:'600',margin:'3px 0'}}>Bachelor of Science(BSc) &bull; Computer Science &bull; Full Time &bull; CGPA: 9.5/10</p>
      </div>

      <div>
      <p style={{color: '#5E718D',fontWeight:'400',margin:'5px 0'}}>Jun 2020 - Apr 2023</p>
    </div>
    </div>
  );
};

export default Education;

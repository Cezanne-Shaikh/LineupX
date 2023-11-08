import React from "react";
import Photo from "../assests/Profile-Picture.svg";
import Verify from "../assests/verified.svg";
import Phone from "../assests/phone.svg";
import Mail from "../assests/mail.svg";
import Location from "../assests/location.svg";
import Experience from "../assests/exprience.svg";
import Salary from "../assests/salary.svg";
import Edit from "../assests/edit_pencil.svg";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile">
        <div className="">
          <img src={Photo} alt="Photo" className="profile-picture" />
        </div>

        <div className="aka">
          <div className="name">
            <p style={{margin:'20px 0 5px 0'}} className="person_name">Arbaz Khan</p>
            <img src={Verify} alt="verified" className="verify" />
          </div>
          <div className="title">
            <p style={{margin:'0'}}>Frontend Developer Intern</p>
            <p style={{margin:'0'}}>at International Business Machines</p>
          </div>
          <div style={{margin:'5px 0'}} className="details">
            <div className="Phone_info">
              <img src={Phone} alt="Phone" className="phone_image" />
              <p className="number">9876543210</p>
            </div>

            <div className="Mail_info">
              <img src={Mail} alt="mail" className="mail_image" />
              <p className="mail">arbaz.khan@gmail.com</p>
            </div>

            <div className="location_info">
              <img src={Location} alt="location" className="location_image" />
              <p className="location">Mumbai, India</p>
            </div>

            <div className="exprience_info">
              <img
                src={Experience}
                alt="exprience"
                className="exprience_image"
              />
              <p className="exprience">6 Months</p>
            </div>

            <div className="salary_info">
              <img src={Salary} alt="salary" className="salary_image" />
              <p className="salary">₹1.2 LPA</p>
            </div>
          </div>
          <div className="edit">
            <img src={Edit} alt="edit" className="edit_image" />
          </div>
        </div>
      </div>

      <div className="skills_section">
      <span className="skills">Angular</span>
      <span className="skills">Node.js</span>
      <span className="skills">Express.js</span>
      <span className="skills">MongoDB</span>
      <span className="skills">DevOps</span>
      <span className="skills">Kubernetes</span>
      <span className="skills">Docker</span>
      <span className="skills">RESTful</span>
      <span className="skills">Azure</span>
      <span className="skills">PostgreSQl</span>
      </div>

      <div className="perfered">
        <p>Preferred Locations: <span className="perfered_locations">Mumbai, Bengaluru, Hyderabad, Delhi, Gurgaon, Noida</span></p>
      </div>
      <div className="Relocate">
        <p>Willing to Relocation: <span className="Relocate_ans">Yes</span></p>
      <div>
        <p>Open for <span >Internship, Full Time</span></p>
      </div>
      </div>
    </div>
  );
};

export default Profile;

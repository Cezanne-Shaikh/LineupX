import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import About from "./components/About";
import Exprience from "./components/Exprience";
import Certification from "./components/Certification";
import Education from "./components/Education";
import PersonalDetails from "./components/PersonalDetails";
import Resume from "./components/Resume";
import ProjectLinks from "./components/ProjectLinks";
const App = () => {
  return (
    <div className="main">
      {/* left side */}
      <div>

      <Profile />
      <About />
      <Exprience />
      <Education/>
      </div>
      {/* right side */}
      <div>
        <Certification/>
        <ProjectLinks/>
        <Resume/>
        <PersonalDetails/>
      </div>
    </div>
  );
};

export default App;

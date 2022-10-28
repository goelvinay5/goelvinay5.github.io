import React from "react";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <div class='row'>
      <div class='col-sm-10' style={{marginLeft:'100px'}}><h1>About Me</h1></div>
      <div class='col-sm-12'><AboutMe/></div>      
    </div>
  );
}

export default Home;
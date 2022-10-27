import React from "react";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>About Me</h1>
      <AboutMe/>
      
    </div>
  );
}

export default Home;
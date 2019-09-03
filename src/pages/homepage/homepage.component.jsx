import React from "react";

import "./homepage.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";

const HomePage = () => (
  <div className="homepage">
      <div className="intro-text">
        <h2 className="main-text">BUDDY</h2>
        <h4 className="sub-text">Just another chatbot!</h4>
      </div>
      <SignIn className="sign-in"/>
  </div>
);

export default HomePage;

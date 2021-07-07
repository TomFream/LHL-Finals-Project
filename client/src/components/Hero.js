import React from "react";
import LazyHero from "react-lazy-hero";

const Hero = (props) => {
  return (
    <div>
      <LazyHero>
        <img src={"laptop2.gif"} alt="logo" width="60%" height="60%" />
        <h1 style={{ color: "#2B2C3B" }}>
          <img src={"logo_small2.png"} alt="logo" width="5%" height="5%" />{" "}
          Welcome to QuizStack
        </h1>
        <h3 style={{ color: "#2B2C3B" }}>
          {" "}
          The quiz app by developers, for developers. Hop in and get ready to
          nail that next big interview.
        </h3>
      </LazyHero>
    </div>
  );
};
export default Hero;

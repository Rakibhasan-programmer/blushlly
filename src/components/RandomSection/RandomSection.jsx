import React from "react";
import image from "../../assets/random.png";
import "./RandomSection.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import threads from "../../assets/Threads.png";
import twitter from "../../assets/twitter.png";
import pinterest from "../../assets/pinterest.png";
import linkedin from "../../assets/linkedin.png";

const RandomSection = () => {
  return (
    <div className="container-fluid mt-lg-5 bg-color pt-3 pb-5 mt-5">
      <div className="divide w-75 mx-auto">
        <div className="mt-lg-5">
          <img src={image} className="img-size" alt="" />
        </div>
        <div className="ms-lg-5">
          <h2 className="fs-1 pb-2 font-vidaloka">Morbi Porttitor</h2>
          <p className="lh-base py-2">
            Onvallis porttitor ligula leo a lectus. Donec id venenatis magna.
            Vivamus placerat luctus neque nec faucibus. Aliquam Gravida eu
            Tortor vitae tempor. . Mauris condimentum scelerisque ante nec
            ultricies. Vivamus tincidunt nibh velit!
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <p>
              <img src={facebook} alt="" />
              <img className="ms-3" src={instagram} alt="" />
              <img className="ms-3" src={threads} alt="" />
              <img className="ms-3" src={twitter} alt="" />
              <img className="ms-3" src={pinterest} alt="" />
              <img className="ms-3" src={linkedin} alt="" />
            </p>
            <p>(85 posts)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomSection;

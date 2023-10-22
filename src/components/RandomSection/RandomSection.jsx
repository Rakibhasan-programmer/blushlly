import React from "react";
import image from "../../assets/random.png";
import "./RandomSection.css";

const RandomSection = () => {
  return (
    <div className="container-fluid mt-lg-5 bg-color pb-5">
      <div className="divide w-75 mx-auto">
        <div className="mt-lg-5 pt-lg-5">
          <img src={image} className="img-size" alt="" />
        </div>
        <div className="ms-5 py-3">
          <h2 className="fs-1 pb-2">Morbi Porttitor</h2>
          <p className="lh-base fs-5">
            Onvallis porttitor ligula leo a lectus. Donec id venenatis magna.
            Vivamus placerat luctus neque nec faucibus. Aliquam Gravida eu
            Tortor vitae tempor. . Mauris condimentum scelerisque ante nec
            ultricies. Vivamus tincidunt nibh velit!
          </p>
          <p>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default RandomSection;

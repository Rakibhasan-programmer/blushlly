import React from "react";
import latest1 from "../../assets/latest1.png";
import latest2 from "../../assets/latest2.png";
import latest3 from "../../assets/latest3.png";
import latest4 from "../../assets/latest4.png";
import "./LatestProject.css";

const LatestPost = () => {
  return (
    <div className="container py-5">
      <div class="bordered-text">
        <div class="border-l left-border"></div>
        <div class="text">Latest Post</div>
        <div class="border-r right-border"></div>
      </div>
      <div className="row g-4 py-5">
        <div className="col-lg-4 card-top text-center">
          <div className="img-container">
            <img src={latest1} className="img-fluid card-img" alt="" />
          </div>
          <div className="border py-3 px-5 text-container bg-white">
            <div>
              <p className="text-center">HAIR</p>
              <h3>Vivamus placerat Luctus Neque nec Faucibus</h3>
              <p>By Sarfraz Jasim 29 July, 2023</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 card-top text-center">
          <div className="img-container">
            <img src={latest2} className="img-fluid card-img" alt="" />
          </div>
          <div className="border py-3 px-5 text-container bg-white">
            <div>
              <p className="text-center">MAKE UP</p>
              <h3>Vivamus placerat Luctus Neque nec Faucibus</h3>
              <p>By Sarfraz Jasim 29 July, 2023</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 card-top text-center">
          <div className="img-container">
            <img src={latest3} className="img-fluid card-img" alt="" />
          </div>
          <div className="border py-3 px-5 text-container bg-white">
            <div>
              <p className="text-center">TIPS</p>
              <h3>Vivamus placerat Luctus Neque nec Faucibus</h3>
              <p>By Sarfraz Jasim 29 July, 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-lg-5 mt-lg-5">
        <div>
          <img src={latest4} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LatestPost;

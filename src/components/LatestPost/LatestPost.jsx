import React from "react";
import latest1 from "../../assets/latest1.png";
import latest2 from "../../assets/latest2.png";
import latest3 from "../../assets/latest3.png";
import "./LatestProject.css";

const LatestPost = () => {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h3>Latest Post</h3>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 card-top">
          <div>
            <img src={latest1} className="img-fluid card-img" alt="" />
          </div>
          <div className="border py-3 px-5 card-bottom bg-white">
            <p className="text-center">HAIR</p>
            <h3>Vivamus placerat Luctus Neque nec Faucibus</h3>
            <p>By Sarfraz Jasim 29 July, 2023</p>
          </div>
        </div>
        <div className="col-lg-4 card-top">
          <div>
            <img src={latest2} className="img-fluid card-img" alt="" />
          </div>
          <div className="border py-3 px-5 card-bottom bg-white">
            <p className="text-center">HAIR</p>
            <h3>Vivamus placerat Luctus Neque nec Faucibus</h3>
            <p>By Sarfraz Jasim 29 July, 2023</p>
          </div>
        </div>
        <div className="col-lg-4 card-top">
          <div>
            <img src={latest3} className="img-fluid card-img" alt="" />
          </div>
          <div className="border py-3 px-5 card-bottom bg-white">
            <p className="text-center">HAIR</p>
            <h3>Vivamus placerat Luctus Neque nec Faucibus</h3>
            <p>By Sarfraz Jasim 29 July, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;

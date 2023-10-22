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
              <p className="text-center underline-with-space">HAIR</p>
              <h3 className="font-vidaloka">Vivamus placerat Luctus Neque nec Faucibus</h3>
              <p className="fw-light">By Sarfraz Jasim 29 July, 2023</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 card-top text-center">
          <div className="img-container">
            <img src={latest2} className="img-fluid card-img" alt="" />
          </div>
          <div className="border py-3 px-5 text-container bg-white">
            <div>
              <p className="text-center underline-with-space">MAKE UP</p>
              <h3 className="font-vidaloka">Vivamus placerat Luctus Neque nec Faucibus</h3>
              <p className="fw-light">By Sarfraz Jasim 29 July, 2023</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 card-top text-center">
          <div className="img-container">
            <img src={latest3} className="img-fluid card-img" alt="" />
          </div>
          <div className="border py-3 px-5 text-container bg-white">
            <div>
              <p className="text-center underline-with-space">TIPS</p>
              <h3 className="font-vidaloka">Vivamus placerat Luctus Neque nec Faucibus</h3>
              <p className="fw-light">By Sarfraz Jasim 29 July, 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-lg-5 mt-lg-5 extra-card">
        <div className="pt-lg-5">
          <img src={latest4} className="img-fluid w-100" alt="" />
        </div>
        <div className="text-center">
          <div className="border px-5 pt-5 pb-2 bg-white extra-text-container">
            <div>
              <p className="underline-with-space">SKIN</p>
              <h3 className="lh-base fs-2 font-vidaloka">
                Sed dignissim quam nulla, at sodales elit <br /> venenatis at.
                In in fringilla
              </h3>
              <p className="py-2 w-75 mx-auto">
                Donec eget leo laoreet, faucibus ante et, finibus orci. Nam
                pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras
                bibendum nisi a interdum facilisis…..
              </p>
              <p className="fw-light">By Sarfraz Jasim - 29 July, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;

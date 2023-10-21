import React from "react";
import image1 from "../../assets/popular1.png";
import image2 from "../../assets/popular2.png";
import image3 from "../../assets/popular3.png";
import image5 from "../../assets/popular5.png";
import image6 from "../../assets/popular6.png";
import "./PopularPost.css";

const PopularPost = () => {
  return (
    <>
      <div className="container pb-5">
        <div class="bordered-text">
          <div class="border-l left-border"></div>
          <div class="text">Popular Post</div>
          <div class="border-r right-border"></div>
        </div>
        <div className="row g-4 py-5">
          <div className="col-lg-4 card-top text-center">
            <div className="img-container">
              <img src={image1} className="img-fluid card-img" alt="" />
            </div>
            <div className="border py-3 px-5 text-container bg-white">
              <div>
                <p className="text-center">HAIR</p>
                <h3>Vivamus placerat Luctus Neque nec Faucibus</h3>
                <p className="fw-light">By Sarfraz Jasim 29 July, 2023</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 card-top text-center">
            <div className="img-container">
              <img src={image2} className="img-fluid card-img" alt="" />
            </div>
            <div className="border py-3 px-5 text-container bg-white">
              <div>
                <p className="text-center">MAKE UP</p>
                <h3>Vivamus placerat Luctus Neque nec Faucibus</h3>
                <p className="fw-light">By Sarfraz Jasim 29 July, 2023</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 card-top text-center">
            <div className="img-container">
              <img src={image3} className="img-fluid card-img" alt="" />
            </div>
            <div className="border py-3 px-5 text-container bg-white">
              <div>
                <p className="text-center">TIPS</p>
                <h3>Vivamus placerat Luctus Neque nec Faucibus</h3>
                <p className="fw-light">By Sarfraz Jasim 29 July, 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 pt-lg-5 mt-lg-5 text-center">
          <div className="col-lg-6 mt-lg-4 extra-card">
            <div>
              <img src={image5} className="img-fluid w-100" alt="" />
            </div>
            <div className="border extra-text-container bg-white py-3 px-4">
              <p>SKIN</p>
              <h3 className="lh-base fs-2">
                Vivamus placerat Luctus Neque nec Faucibus Vivamus ultricies
                arcu Vivamus
              </h3>
              <p className="fw-light">By Sarfraz Jasim - 29 July, 2023</p>
            </div>
          </div>
          <div className="col-lg-6 mt-lg-4 extra-card">
            <div>
              <img src={image6} className="img-fluid w-100" alt="" />
            </div>
            <div className="border extra-text-container bg-white py-3 px-4">
              <p>SKIN</p>
              <h3 className="lh-base fs-2">
                Vivamus placerat Luctus Neque nec Faucibus Vivamus ultricies
                arcu Vivamus
              </h3>
              <p className="fw-light">By Sarfraz Jasim - 29 July, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularPost;

import React from "react";
import image1 from "../../assets/popular1.png";
import image2 from "../../assets/popular2.png";
import image3 from "../../assets/popular3.png";
import image5 from "../../assets/popular5.png";
import image6 from "../../assets/popular6.png";
import "./PopularPost.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const PopularPost = () => {
  return (
    <div className="pb-lg-5 my-5">
      <div className="container pb-5 mb-lg-5">
        <SectionTitle title="Popular Post" />
        <div className="row g-4 py-5">
          <div className="col-lg-4 card-top text-center">
            <div className="img-container">
              <img src={image1} className="img-fluid card-img" alt="" />
            </div>
            <div className="border border-1 border-dark py-3 px-5 text-container bg-white">
              <div>
                <p className="text-center underline-with-space">HAIR</p>
                <h3 className="font-vidaloka">Vivamus placerat Luctus Neque nec Faucibus</h3>
                <p className="fw-light">By Sarfraz Jasim 29 July, 2023</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 card-top text-center">
            <div className="img-container">
              <img src={image2} className="img-fluid card-img" alt="" />
            </div>
            <div className="border border-1 border-dark py-3 px-5 text-container bg-white">
              <div>
                <p className="text-center underline-with-space">MAKE UP</p>
                <h3 className="font-vidaloka">Vivamus placerat Luctus Neque nec Faucibus</h3>
                <p className="fw-light">By Sarfraz Jasim 29 July, 2023</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 card-top text-center">
            <div className="img-container">
              <img src={image3} className="img-fluid card-img" alt="" />
            </div>
            <div className="border border-1 border-dark py-3 px-5 text-container bg-white">
              <div>
                <p className="text-center underline-with-space">TIPS</p>
                <h3 className="font-vidaloka">Vivamus placerat Luctus Neque nec Faucibus</h3>
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
            <div className="border border-1 border-dark extra-text-container bg-white py-3 px-4">
              <p className="underline-with-space">SKIN</p>
              <h3 className="fs-2 font-vidaloka py-2">
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
            <div className="border border-1 border-dark extra-text-container bg-white py-3 px-4">
              <p className="underline-with-space">TIPS</p>
              <h3 className="fs-2 font-vidaloka py-2">
                Vivamus placerat Luctus Neque nec Faucibus Vivamus ultricies
                arcu Vivamus
              </h3>
              <p className="fw-light">By Sarfraz Jasim - 29 July, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPost;

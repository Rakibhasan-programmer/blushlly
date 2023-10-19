import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header id="home">
        <section className="text-white">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="background background-img1 d-flex justify-content-center align-items-center">
                  <div className="border positioned p-5">
                    <p>SKIN</p>
                    <h3 className="lh-sm">
                      Six Hyaluronic Serums <br /> For Glowing Summer Skin <br /> Vivamus
                      Placerat
                    </h3>
                    <p className="py-3">By Sarfraz Jasim 29 July, 2023</p>
                    <p>Continue Reading</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
              <div className="background background-img1 d-flex justify-content-center align-items-center">
                  <div className="border positioned p-5">
                    <p>SKIN</p>
                    <h3>
                      Six Hyaluronic Serums <br /> For Glowing Summer Skin <br /> Vivamus
                      Placerat
                    </h3>
                    <p>By Sarfraz Jasim 29 July, 2023</p>
                    <p>Continue Reading</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="background background-img3 d-flex justify-content-center align-items-center">
                <div className="border positioned p-5">
                    <p>SKIN</p>
                    <h3>
                      Six Hyaluronic Serums <br /> For Glowing Summer Skin <br /> Vivamus
                      Placerat
                    </h3>
                    <p>By Sarfraz Jasim 29 July, 2023</p>
                    <p>Continue Reading</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;

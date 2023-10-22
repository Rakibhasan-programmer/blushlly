import React from "react";
import footer1 from "../../assets/footer/footer (1).jpg";
import footer2 from "../../assets/footer/footer (2).jpg";
import footer3 from "../../assets/footer/footer (3).jpg";
import footer4 from "../../assets/footer/footer (4).jpg";
import footer5 from "../../assets/footer/footer (5).jpg";
import footer6 from "../../assets/footer/footer (6).jpg";
import footer7 from "../../assets/footer/footer (7).jpg";
import footer8 from "../../assets/footer/footer (8).jpg";
import footer9 from "../../assets/footer/footer (9).jpg";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 px-4">
            <h4 className="mb-5 font-vidaloka text-uppercase">Categories</h4>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h6>Beauty</h6>
                <small>(4)</small>
              </div>
              <hr />
            </div>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-vidaloka">Beauty</h6>
                <small>(4)</small>
              </div>
              <hr />
            </div>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-vidaloka">Fashion</h6>
                <small>(4)</small>
              </div>
              <hr />
            </div>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-vidaloka">Makeup</h6>
                <small>(4)</small>
              </div>
              <hr />
            </div>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-vidaloka">Body</h6>
                <small>(4)</small>
              </div>
              <hr />
            </div>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-vidaloka">Lifestyle</h6>
                <small>(4)</small>
              </div>
              <hr />
            </div>
            <div className="position-relative">
              <input
                type="search"
                className="ps-3 py-2 w-100"
                placeholder="Search"
              />
              <div className="position-absolute top-0 start-0 z-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-4 px-4">
            <h4 className="mb-5 font-vidaloka text-uppercase">POPULAR POST</h4>

            <div>
              <div className="d-flex gap-4 my-3">
                <img src={footer1} alt="" />
                <div>
                  <h5 className="font-vidaloka">
                    Vivamus placerat Luctus <br /> Neque nec Faucibus
                  </h5>
                  <small>7 Days ago</small>
                </div>
              </div>
              <div className="d-flex gap-4 my-3">
                <img src={footer2} alt="" />
                <div>
                  <h5 className="font-vidaloka">
                    Vivamus placerat Luctus <br /> Neque nec Faucibus
                  </h5>
                  <small>4 Days ago</small>
                </div>
              </div>{" "}
              <div className="d-flex gap-4 my-3">
                <img src={footer3} alt="" />
                <div>
                  <h5 className="font-vidaloka">
                    Vivamus placerat Luctus <br /> Neque nec Faucibus
                  </h5>
                  <small>14 Days ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 px-4">
            <h4 className="mb-5 font-vidaloka text-uppercase">GALLERY</h4>
            <div>
              <div className="d-flex gap-4">
                <img src={footer5} alt="" />
                <img src={footer6} alt="" />
                <img src={footer7} alt="" />
              </div>
              <div className="d-flex gap-4 mt-3">
                <img src={footer8} alt="" />
                <img src={footer9} alt="" />
                <img src={footer4} alt="" />
              </div>
            </div>
            <div className="d-flex gap-3 mt-3">
              <div
                className="rounded-pill px-3 py-2 d-inline-block mt-2"
                style={{ background: "#535353", fontSize: "0.8rem" }}
              >
                Beauty
              </div>
              <div
                className="rounded-pill px-3 py-2 d-inline-block mt-2"
                style={{ background: "#535353", fontSize: "0.8rem" }}
              >
                Skin
              </div>
              <div
                className="rounded-pill px-3 py-2 d-inline-block mt-2"
                style={{ background: "#535353", fontSize: "0.8rem" }}
              >
                Makeup
              </div>
              <div
                className="rounded-pill px-3 py-2 d-inline-block mt-2"
                style={{ background: "#535353", fontSize: "0.8rem" }}
              >
                Hair
              </div>
            </div>
            <div  className="d-flex gap-3">
              <div
                className="rounded-pill px-3 py-2 mt-2"
                style={{ background: "#535353", fontSize: "0.8rem" }}
              >
                Tips
              </div>
              <div
                className="rounded-pill px-3 py-2 mt-2"
                style={{ background: "#535353", fontSize: "0.8rem" }}
              >
                Fashion
              </div>
              <div
                className="rounded-pill px-3 py-2 mt-2"
                style={{ background: "#535353", fontSize: "0.8rem" }}
              >
                Eye
              </div>
              <div
                className="rounded-pill px-3 py-2 mt-2"
                style={{ background: "#535353", fontSize: "0.8rem" }}
              >
                Skin
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
            <hr />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

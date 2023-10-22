import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import feed1 from "../../assets/feed1.jpg";
import feed2 from "../../assets/feed2.jpg";
import feed3 from "../../assets/feed3.jpg";
import feed4 from "../../assets/feed4.jpg";

const Feed = () => {
  return (
    <div className="container pb-5">
      <SectionTitle title="Instagram Feed" />
      <div className="d-lg-flex gap-4 pt-5 pb-3">
        <img className="img-fluid w-100 my-3" src={feed1} alt="feed" />
        <img className="img-fluid w-100 my-3" src={feed2} alt="feed" />
        <img className="img-fluid w-100 my-3" src={feed3} alt="feed" />
        <img className="img-fluid w-100 my-3" src={feed4} alt="feed" />
      </div>
      <button className="btn btn-dark w-100 rounded-pill py-2">Follow Us</button>
    </div>
  );
};

export default Feed;

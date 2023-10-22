import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./RandomPostCard.css"

function RandomPostCard({ index, post }) {
  const marginStyle =
    index % 2 == 0 ? { marginRight: "-9rem" } : { marginLeft: "-9rem" };

  return (
    <div className="d-lg-flex align-items-center post-card">
      <img
        className={`img-fluid w-100 ${index % 2 == 0 ? "order-1" : "order-0"}`}
        src={post.image}
        alt={post.title}
      />
      <div
        className="w-80 p-5 bg-white border border-1 border-dark z-1 post-content"
        style={marginStyle}
      >
        <p className="text-uppercase" style={{ textDecoration: "underline" }}>
          {post.tag}
        </p>
        <h4 className="fs-2 font-vidaloka">
          Sed dignissim quam nulla, at sodales elit venenatis at. In in
          fringilla
        </h4>
        <p className="py-3">
          Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar
          felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a
          interdum facilisis
        </p>
        <div className="d-flex">
          <p>
            By <b>Sarfraz Jasim</b>
          </p>
          <p className="px-2">-</p>
          <p>29 July, 2023</p>
        </div>
      </div>
    </div>
  );
}

export default function RandomPost() {
  const [randomPost, setRandomPost] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRandomPost(data));
  }, []);

  return (
    <div className="pb-lg-5">
      <div className="container">
        <SectionTitle title="Random Post" />
        <div className="row g-4 pt-5">
          {randomPost.map((post, index) => (
            <>
              <RandomPostCard key={post.id} index={index} post={post} />
              <hr
                className="mt-5"
                style={{
                  borderStyle: "dashed",
                  borderTop: "2px dashed #1D1A1A",
                }}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

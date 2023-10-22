import React from "react";

const LoadingSpiner = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", backgroundColor: "black" }}
      >
        <div class="spinner-border text-info" role="status" style={{width: "3rem", height: "3rem"}}>
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpiner;

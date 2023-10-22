import React from "react";

const Subscribe = () => {
  return (
    <div class="mt-5 p-5 text-center" style={{background: "#DDDDDD"}}>
  <div className="container p-5">
    <h2 className="font-vidaloka fs-1 pb-5">Subscribe For Best <br /> Beauty Tips</h2>
    <form className="w-50 mx-auto">
      <div class="input-group mb-3">
        <input
          type="text"
          className="form-control py-3 ps-4 rounded-pill"
          placeholder="Enter your email address"
        />
        <div class="input-group-append m-1">
          <button
            className="btn btn-dark px-4 rounded-pill"
            type="submit"
            id="subscribe-button"
            style={{marginLeft: "-9.2rem", padding: "0.74rem 0"}}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div class="form-check d-flex justify-content-center gap-2 fw-medium">
        <input
          type="checkbox"
          className="form-check-input"
          id="data-agreement"
        />
        <label class="form-check-label" for="data-agreement">
          I agree that my submitted data is being collected and stored.
        </label>
      </div>
    </form>
  </div>
</div>

  );
};

export default Subscribe;

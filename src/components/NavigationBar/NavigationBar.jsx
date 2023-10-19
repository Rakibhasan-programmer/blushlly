import React from "react";
import blushlly from "../../assets/Blushlly.png";
import { BiSearch } from 'react-icons/bi';

const NavigationBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary py-3">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={blushlly} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
              <li class="nav-item ps-lg-2">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item ps-lg-2">
                <a class="nav-link" href="#">
                  Categories
                </a>
              </li>
              <li class="nav-item ps-lg-2">
                <a class="nav-link" href="#">
                  Makeup
                </a>
              </li>
              <li class="nav-item ps-lg-2">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item ps-lg-2">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item ps-lg-2">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <form class="d-flex fs-5" role="search">
              <p className="pe-2">Search</p>
              <p><BiSearch /></p>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;

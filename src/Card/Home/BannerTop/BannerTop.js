import React from "react";
// import "./BannerTop.css";

function BannerTop() {
  return (
    <>
      <div className="bannerslider">
        <div id="carouselExampleControls" class="carousel slide carouselslide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active carouselitem">
              <img src="./images/spbanner3.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item carouselitem">
              <img src="./images/spcredit12.jpg" class="d-block w-100" alt="..." />
            </div>
            
           
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default BannerTop;
import React from "react";
import banner1 from "../../assets/assets/images/banner/1.jpg";
import banner2 from "../../assets/assets/images/banner/2.jpg";
import banner3 from "../../assets/assets/images/banner/3.jpg";
import banner4 from "../../assets/assets/images/banner/4.jpg";
import banner5 from "../../assets/assets/images/banner/5.jpg";
import banner6 from "../../assets/assets/images/banner/6.jpg";

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px] ">
        <div id="slide1" className="carousel-item relative w-full rounded-lg">
          <img src={banner1} className="w-full rounded-lg " />
          <div className="absolute flex items-center pl-12  bg-gradient-to-r from-[#151515] to-[rgba(21, 21,  top-0 bottom-0">
            <div className="texts text-white w-1/2 space-y-7">
              <h2 className="text-6xl font-semibold ">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="button ">
                <button className="btn btn-warning">Discover More</button>
                <button className="btn btn-outline btn-secondary ml-5">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide6" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full rounded-lg" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full rounded-lg" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full rounded-lg" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={banner5} className="w-full rounded-lg" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={banner6} className="w-full rounded-lg" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

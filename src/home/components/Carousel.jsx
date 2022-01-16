import React, { useState } from "react";

import LoginModal from "../../login/components/LoginModal";
import AdminLoginModal from "../../login/components/AdminLoginModal"
import "./Carousel.css";

import img1 from "../Images/p8.jpg";
import img2 from "../Images/p1.jpg";
import img3 from "../Images/p11.jpg";

const MyCarousel = (props) => {

  const [isLogin, SetLogin] = useState(false);
  const handleOpen = (event) => {
    event.preventDefault();
    SetLogin(true);
  };
  const handleClose = () => SetLogin(false);


   const [isAdminLogin, SetAdminLogin] = useState(false);
   const AdminhandleOpen = (event) => {
     event.preventDefault();
     SetAdminLogin(true);
   };
   const AdminhandleClose = () => SetAdminLogin(false);


  return (
    <React.Fragment>
      <AdminLoginModal open={isAdminLogin} Close={AdminhandleClose} />
      <LoginModal open={isLogin} Close={handleClose} />

      <div className="mainDiv">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel CarouselSize slide"
          data-ride="carousel"
          data-interval="7000"
        >
          <div class="CarouselBack carousel-inner">
            <div class=" CarouselBack carousel-item active">
              <img class="d-block w-100" src={img1} alt="First slide" />

              {/* <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div> */}
            </div>

            <div class="CarouselBack carousel-item">
              <img class="d-block w-100" src={img2} alt="Second slide" />
            </div>

            <div class="CarouselBack carousel-item">
              <img class="d-block w-100" src={img3} alt="Third slide" />
            </div>
          </div>
        </div>

        <div className="CarouselRightContent">
          <div>
            <h1 className="">Best in the Business</h1>
            <p>
              Can't hold on to your fingers hearting? Braing saturated and stuck
              on the same code for days!? We got you covered. Coder's Arena
              brings the exclusivity of quality coding and discussion forums to
              all the coding enthusiasts.
            </p>
            <p>
              Motivation and aspirations will know no bounds the moment you
              login through our portal. The ultimate goto solution to all your
              problems!
            </p>
          </div>

          <div class="wrapper">
            <div class="link_wrapper">
              <a href="/" onClick={handleOpen}>
                JOIN US
              </a>
            </div>

            
            <div class="link_wrapper AdminBTN">
              <a href="/" onClick={AdminhandleOpen}>
                ADMIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyCarousel;

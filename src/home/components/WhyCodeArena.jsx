
import Example from "../../Shared/components/CryptoText";

import "./WhyCodeArena.css";

import img1 from "../GridImages/p8.jpg";
import img2 from "../GridImages/p14.jpg";
import img3 from "../GridImages/p12.jpg";


  // import {
  //   Animator,
  //   ScrollContainer,
  //   ScrollPage,
  //   batch,
  //   Fade,
  //   FadeIn,
  //   Move,
  //   MoveIn,
  //   MoveOut,
  //   Sticky,
  //   StickyIn,
  //   ZoomIn,
  // } from "react-scroll-motion";


const values = [
  "Why Code Arena ?",
  "Why Code Arena  ?",
  "Why Code Arena ?",
  "Why Code Arena  ?",
];


const WhyCodeArena = () => {
  return (
    <div className="WhyCodeArena container">
      <div className="Title">
        <Example textArray={values} />
      </div>

      <div className="GridBackground">
        <div>
          {/* 1 */}

          <div className="FirstLeft ">
            <p class="Header">Title</p>
            <p className="Description">
              Lorem ipsum doborum numquam blanditiis harum quisquam eius sed
              odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliqaerat, odit,
            </p>
          </div>
          <div className="FirstRight ">
            <img src={img1} alt="First" />
          </div>
        </div>
        {/* 2 */}
        <div className="SecondRow">
          <div className="SecondLeft ">
            <img src={img2} alt="Second" />
          </div>
          <div className="SecondRight ">
            <p class="Header">Title</p>
            <p className="Description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              volueritatis obcaecati tenetur iure eius earum ut culpa officia
              aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
              ipsum debitis quas aliquid. Reprehenderit, quia.
            </p>
          </div>
        </div>
        {/* 3 */}

        <div className="ThirdRow">
          <div className="ThirdLeft ">
            <p class="Header">Title</p>
            <p className="Description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, tium nemo autem. Veritatis obcaecati tenetur iure eius
              earum ut molestias architecto voluptate aliquam nihil, eveniet
              aliquid cesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
            </p>
          </div>
          <div className="ThirdRight ">
            <img src={img3} alt="Third" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCodeArena;

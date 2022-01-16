
import "./Cardteam.css";

import img1 from "../TeamImages/anony.jpg"
const Cardteam = (props) => {
  return (
    <div class="effect8  card TcardStyle">
      <img class="card-img-top  CardImage" src={img1} alt="Cardcap" />
      <div class="card-body">
        <div className="">{/* <img href="/"  alt="" /> */}</div>

        <p class=" Tcard-titlePOS">Sherlock Holmes</p>


        <div>

          <p className="IconsPOS">
            <i class=" EachIcons fab fa-1x fa-instagram"></i>
            <i class=" EachIcons fab fa-1x fa-twitter"></i>
            <i class=" EachIcons fab fa-1x fa-github"></i>
          </p>

        </div>

        {/* <p class="card-text card-textPOS">{props.description}</p> */}
      </div>
    </div>
  );
};

export default Cardteam;

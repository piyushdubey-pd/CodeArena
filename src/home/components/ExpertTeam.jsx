
import Cardteam from "../../home/components/Cardteam";

import "./ExpertTeam.css";

import Example from "../../Shared/components/CryptoText";


const values = [
  "Meet Our Expert Team",
  "Meet Our Expert Team ",
  "Meet Our Expert Team",
  "Meet Our Expert Team ",
];

const ExpertTeam = () => {
  return (
    <div className="ExpertTeam">
      <div className="Title">
        <Example textArray={values} />
      </div>

      <div className="CardsTeam">
        <div className="CardItem ">
          <Cardteam />
        </div>

        <div className="CardItem CardItemTeam2">
          <Cardteam />
        </div>

        <div className="CardItem CardItemTeam3 ">
          <Cardteam />
        </div>
      </div>
    </div>
  );
};

export default ExpertTeam;

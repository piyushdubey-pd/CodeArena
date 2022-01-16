import NewCard from "../../home/components/NewCard";

import "./WhatweDo.css";

import Example from "../../Shared/components/CryptoText";

var card1Desc =
  "You can now add your questions to the wall which gets notified to the rest of the folks of your college, while your querries get answered you could answer other's doubt and gain brownie points!";

var card2Desc =
  "You canof others too and folks You canof others too and folks o You canof others too and folks o of your college will get the opportunity to answer them! Not only  you can ping your friends at personal level and discuss your dilemma within an end to end encryption";

// var card3Desc =
// "Our 24/7 active servers grants all users to access their personalised version control repositories to save their work and link them accordinly depending on their needs.";


const values = [
  "What Does Code Arena Do ?",
  "What Does Code Actually Arena Do ?",
  "What Does Code Arena Do ?",
  "What Does Code Actually Do ?",
];

const WhatweDo = () => {
  return (
    <div className="WhatweDoPOS">
      <div className="Title">
        <Example textArray={values}/>
      </div>

      <div className="Cards">
        <div className="CardItem CardItem1">
          <NewCard title="" description={card1Desc} />
        </div>

        <div className="CardItem CardItem2">
          <NewCard title="" description={card2Desc} />
        </div>

        <div className="CardItem CardItem2">
          <NewCard title="" description={card2Desc} />
        </div>
      </div>
    </div>
  );
};

export default WhatweDo;

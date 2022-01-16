import "./NewCard.css";

const NewCard = (props) => {
  return (
    <div className="CardStyle">
      <div class=" flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <i class="fas fa-3x fa-check-circle IconPOS"></i>
            <p class="card-titlePOS">Card title</p>
          </div>
          <div class="flip-card-back">
            <p class="card-text card-textPOS">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default NewCard;


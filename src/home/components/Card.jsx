
import "./Card.css";

// card - img - top;
const Card = (props) => {
  return (
    
    <div class="card cardStyle">
      <div class="card-body">
        <div className="IconPOS">
          <i class="fas fa-3x fa-check-circle"></i>
        </div>

        <p class="card-title card-titlePOS">Card title</p>

        <p class="card-text card-textPOS">
         {props.description}
        </p>

        {/* <a href="/" class="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};

export default Card;


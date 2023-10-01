import { Link } from "react-router-dom";

const Card = ({ donation }) => {
  const {id, image, title, category, price, card_bg_color, button_bg_color, text_bg_color} = donation;
  
  return (

     <div>
      <Link to={`/donation/${id}`}>
      <div 
      style={{ backgroundColor: card_bg_color, color: text_bg_color }} className="card card-compact shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="card-actions">
          <button style={{ backgroundColor: button_bg_color, color: text_bg_color}} 
          className={`btn normal-case`}>{category}</button>
        </div>   
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
      </Link>
     </div>
 

  );
};

export default Card;

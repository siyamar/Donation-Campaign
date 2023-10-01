import { Link } from "react-router-dom";

const DonationCard = ({donation}) => {
    const {id, image, description, title, category, price, card_bg_color, button_bg_color, text_bg_color}=donation;
    return (
        <div>
            <div style={{backgroundColor: card_bg_color}}
            className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <button 
      style={{
      color: text_bg_color,
      backgroundColor: button_bg_color
    }}
    className="mb-4 px-4 py-2 rounded-lg"
    >
      {category}
    </button>
    <h4 className="mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {title}
    </h4>
    <p 
    style={{
      color: text_bg_color,
    }}
    className="mb-8 block font-sans text-base font-extrabold leading-relaxed text-gray-700 antialiased">
     {price}
    </p>
   <Link to={`/donation/${id}`}>
   <button 
    style={{
      backgroundColor: text_bg_color,
      }}
    className="text-white btn">
    View Details
    </button>
   </Link>
  </div>
</div>
        </div>
    );
};

export default DonationCard;
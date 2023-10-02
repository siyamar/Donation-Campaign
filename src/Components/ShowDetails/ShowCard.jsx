import { setItem } from "localforage";
import swal from "sweetalert";

const ShowCard = ({donation}) => {
    const {id, image, description, title, category, price, card_bg_color, button_bg_color, text_bg_color}=donation;

    const handleAddToDonation= ()=>{
      const addedDonationsArray =[]
      const donationItem = JSON.parse(localStorage.getItem('donations'))

      if(!donationItem){
        addedDonationsArray.push(donation)
        localStorage.setItem('donations', JSON.stringify(addedDonationsArray))
        swal("Good job!", "Donation Successfully!", "success");
      }
      else{
        const exixt = donationItem.find(donation=> donation.id==id)
        if(!exixt){
          addedDonationsArray.push(...donationItem, donation)
          localStorage.setItem('donations', JSON.stringify(addedDonationsArray))
          swal("Good job!", "Donation Successfully!", "success");
         }
        else{
          swal("Error!", "Already Donated!", "error");
        }


      }
    }

    return (
        <div>
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <img className="w-screen max-h-[80vh]" src={image} alt="" />
  <div className="mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img 
      className="w-screen max-h-[80vh]"
      src={image}
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-4xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {title}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      {description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet eveniet, earum debitis, ex dicta sit cumque repellat modi tempore fugiat numquam eum veritatis et! Culpa laboriosam iste similique consectetur?
    </p>
  </div>
  <div className="p-6 pt-0 absolute bottom-32 left-4">
    <button
      onClick={handleAddToDonation}
      style={{ backgroundColor: text_bg_color }}
      className="select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Donate {price}
    </button>
  </div>
</div>

        </div>
    );
};

export default ShowCard;
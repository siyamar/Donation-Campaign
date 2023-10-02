import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [donations, setDonations] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [displayDonation, setDisplayDonation] = useState([]);
  console.log(displayDonation)

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) =>{
            setDonations(data);
            setDisplayDonation(data);
  })
  }, []);



  const handleSearch = (e) => {
    e.preventDefault();
    if(filterCategory == 'Health')
    {
        const health= donations.filter(donation=> donation.category =='Health');
        setDisplayDonation(health);
    }
    else if(filterCategory == 'education'){
        const educatin = donations.filter(donation=> donation.category =='Education');
        setDisplayDonation(educatin);
    }
    else if(filterCategory == 'clothing'){
        const clothing = donations.filter(donation=> donation.category =='Clothing');
        setDisplayDonation(clothing);
    }
    else if(filterCategory == 'food'){
        const food = donations.filter(donation=> donation.category =='Food');
        setDisplayDonation(food);
    }
  };

  const handleFilterCategory = (e) => {
    setFilterCategory(e.target.value);
  };

  return (
    <div>
      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold mb-10">
          I Grow By Helping People In Need
        </h2>
        <input
          onChange={handleFilterCategory}
          className="px-7 py-3 border rounded-l-lg"
          type="text"
          placeholder="Search here..."
        />
        <button
          onClick={handleSearch}
          className="bg-[#FF444A] px-4 py-3 rounded-r-lg"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-2">
        {displayDonation.map((donation) => (
          <Card key={donation.id} donation={donation}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;

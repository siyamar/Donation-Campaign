import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [donations, setDonations] = useState([]);
    useEffect(()=>{
        fetch('/public/data.json')
        .then(res => res.json())
        .then(data => setDonations(data))
    },[])
    return (
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {
                donations.map(donation => <Card key={donation.id} donation={donation}></Card>)
            }
        </div>
    );
};

export default Cards;
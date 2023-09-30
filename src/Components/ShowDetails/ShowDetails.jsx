import { useEffect } from "react";
import { useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import ShowCard from "./ShowCard";

const ShowDetails = () => {
    const[donation, setDonation] =useState({})

    const {id} = useParams()

    const donations = useLoaderData()

    useEffect(()=>{
        const findDonation = donations?.find(donation => donation.id==id)
        setDonation(findDonation)
    },[id, donations])

    return (
        <div className="max-w-7xl mx-auto px-2">
            <ShowCard key={donation.id} donation={donation}></ShowCard>
        </div>
    );
};

export default ShowDetails;
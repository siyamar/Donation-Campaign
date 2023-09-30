import { useEffect } from "react";
import { useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {

    const [donationItems, setDonationItems] = useState([])
    const [noData, setNoData] = useState(false)
    const [isShow, setIsShow] = useState(false)

    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('donations'))

        
        if(donationItem){

            setDonationItems(donationItem)
        }
        else{
            setNoData('No Data Found')
        }
    },[])

    return (
        <div className="mt-20">
            {
                noData ? <p className="h-[60vh] flex justify-center items-center">{noData}</p> 
                : <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto px-2">
                        {
                            isShow ? 
                            donationItems.map(donation=> <DonationCard key={donation.id} donation={donation}></DonationCard>)
                            :
                            donationItems.slice(0, 4).map(donation=> <DonationCard key={donation.id} donation={donation}></DonationCard>)
                        }
                    </div>
                  {
                    donationItems.length>4 &&   <div className="text-center my-10">
                    <button onClick={()=>setIsShow(!isShow)} className="py-3 px-5 rounded-lg bg-[#009444] text-white">
                        {isShow? 'See Less' : 'See All'}
                    </button>
                    </div>
                  }
                    
                </div>
            }
        </div>
    );
};

export default Donation;
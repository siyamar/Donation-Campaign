import { useEffect } from "react";
import { useState } from "react";


const Donation = () => {

    const [donationItems, setDonationItems] = useState([])
    const [noData, setNoData] = useState(false)

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
        <div>
            {
                noData ? <p className="h-[60vh] flex justify-center items-center">{noData}</p> 
                : <div>
                    <div>
                        {
                            donationItems.map(donation=> )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;
import { Link } from "react-router-dom";
const ErrorPages = () => {
    return (
        <>
         <div className="flex items-center justify-center  h-[50vh]">
            <h2 className="text-5xl font-extrabold">Oops!!!</h2>
        </div>
        <div className="flex justify-center">
            <Link>
            <button className="btn btn-neutral">Go Back</button>
            </Link>
        </div>
        </>
       
    
    );
};

export default ErrorPages;
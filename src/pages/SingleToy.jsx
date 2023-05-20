import { useLoaderData } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import Rating from 'react-rating';
import { FaStar , FaRegStar} from "react-icons/fa";

const SingleToy = () => {

    const toy = useLoaderData();
    useTitle("Single Toy");

    return (
        <div className="flex justify-center my-5">
            <div key={toy._id} className="card card-compact max-w-lg bg-base-100 shadow-xl">
                <figure><img className="w-full" src={toy.picture} alt="Toy Car" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{toy.toyName}</h2>
                    <div className="grid grid-cols-2 gap-4 text-md">
                        <p> <span className="font-bold">Seller: </span> {toy.sellerName}</p>
                        <p> <span className="font-bold">Seller-Email: </span> {toy.sellerEmail}</p>                      
                        <p> <span className="font-bold">Available Quantity: </span> {toy.availableQuantity}</p>
                        <p>  <span className="font-bold">price: </span>${toy.price}K</p>
                        <p className="space-x-2">
                    <span className="font-bold">Rating: </span>
                    <span>
                        <Rating
                            placeholderRating={toy.rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        
                    </span>
                    <span>{toy.rating}</span>
                </p>
                    </div>
                    
                    <p className="text-gray-600"><span className="font-bold">Description: </span>{toy.description}</p>

                </div>
            </div>
        </div>
    );
};

export default SingleToy;
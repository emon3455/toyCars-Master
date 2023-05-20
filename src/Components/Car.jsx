/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Rating from 'react-rating';
import { FaStar , FaRegStar} from "react-icons/fa";

const Car = ({ car }) => {

    return (
        <div className="card card-compact max-w-md bg-base-100 shadow-xl">
            <figure><img className="w-full" src={car.picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl xl:text-2xl">{car.toyName}</h2>
                <p>  <span className="font-bold">price: </span>${car.price}K</p>
                <p className="space-x-2">
                    <span className="font-bold">Rating: </span>
                    <span>
                        <Rating
                            placeholderRating={car.rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        
                    </span>
                    <span>{car.rating}</span>
                </p>
                <button className="btn btn-info btn-sm">
                    <Link to={`/allToy/${car._id}`} >
                        View Details
                    </Link >
                </button>

            </div>
        </div>
    );
};

export default Car;
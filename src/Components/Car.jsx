/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Car = ({ car }) => {
    return (
        <div className="card card-compact max-w-md bg-base-100 shadow-xl">
            <figure><img className="w-full" src={car.picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{car.toyName}</h2>
                <p>  <span className="font-bold">price: </span>${car.price}K</p>
                <p>  <span className="font-bold">Rating: </span>{car.rating}</p>
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
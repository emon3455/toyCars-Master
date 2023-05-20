import { useLoaderData } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const SingleToy = () => {

    const toy = useLoaderData();
    console.log(toy);
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
                        <p>  <span className="font-bold">Rating: </span>{toy.rating}</p>
                    </div>
                    
                    <p className="text-gray-600"><span className="font-bold">Description: </span>{toy.description}</p>

                </div>
            </div>
        </div>
    );
};

export default SingleToy;
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";


const AllToys = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/toys`)
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(er => console.log(er.message));
    }, [])

    console.log(toys);

    return (
        <div className="my-10">
            <h2 className="text-4xl text-center font-extrabold my-12 text-violet-600">ToyCars Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 p-2">
                {
                    toys.map(toy => {
                return  (<div key={toy._id} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img className="w-full" src={toy.picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{toy.toyName}</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <p> <span className="font-bold">Seller: </span> {toy.sellerName}</p>
                                    <p> <span className="font-bold">Catagory Name: </span> {toy.subCategory}</p>
                                    <p>  <span className="font-bold">price: </span>{toy.price}</p>
                                    <p> <span className="font-bold">Available Quantity: </span> {toy.availableQuantity}</p>
                                </div>
                                <p>{toy.description}</p>
                                <div className="card-actions justify-end">
                                    <button  className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>);
                    })
                }
            </div>
        </div>
    );
};

export default AllToys;
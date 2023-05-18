/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
            <div className="p-2">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Seller Name</th>
                                <th>Toy Name</th>
                                <th>Sub Catagory</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map((toy, indx) => {
                                    return (<tr key={toy._id}>
                                        <th>{indx + 1}</th>
                                        <td>{toy.sellerName}</td>
                                        <th>{toy.toyName}</th>
                                        <th>{toy.subCategory}</th>
                                        <th>${toy.price}K</th>
                                        <th>{toy.availableQuantity}</th>
                                        <th>
                                            <Link to={`/allToy/${toy._id}`} className="btn btn-warning btn-sm">
                                                View Details
                                            </Link >
                                        </th>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProviders/AuthProvider";


const MyToy = () => {

    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(er => console.log(er.message));
    }, [user])

    return (
        <div className="my-10">
            <h2 className="text-3xl text-center font-extrabold my-12 text-violet-600">ToyCars Collections from: {user.displayName}</h2>
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
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map((toy, indx) => {
                                    return (<tr key={toy._id}>
                                        <td>{indx + 1}</td>
                                        <td>{toy.sellerName}</td>
                                        <td>{toy.toyName}</td>
                                        <td>{toy.subCategory}</td>
                                        <td>${toy.price}K</td>
                                        <td>{toy.availableQuantity}</td>
                                        <th>
                                            <Link to={`/allToy/${toy._id}`} className="btn btn-warning btn-sm">
                                                Update
                                            </Link >
                                        </th>
                                        <th>
                                            <Link to={`/allToy/${toy._id}`} className="btn btn-circle btn-outline">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </Link>
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

export default MyToy;
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useTitle } from "../hooks/useTitle";


const AllToys = () => {

    const [toys, setToys] = useState([]);
    useTitle("All Toys");
    
    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const txt = form.search.value;

        fetch(`https://car-master-toys-server.vercel.app/toySearch/${txt}`)
            .then(res => res.json())
            .then(data => {
                if(data.length==0){
                    Swal.fire({
                        icon: 'error',
                        title: 'No Matched!!',
                        text: 'Sorry No Data Found!... Try Again',
                    });
                }
                setToys(data)
            })
            .catch(er => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!!',
                    text: 'Something Went Wrong! Try Again',
                });
        })
        form.reset();

    }

    useEffect(() => {
        fetch(`https://car-master-toys-server.vercel.app/toys`)
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(er => console.log(er.message));
    }, []);

    
    console.log(toys);

    return (
        <div className="my-10">
            <h2 className="text-4xl text-center font-extrabold my-12 text-violet-600">ToyCars Collections</h2>

            <div className="p-2 w-full lg:w-3/4 mx-auto my-10">
                <form onSubmit={handleSearch}>
                    <div className="flex">
                        <input type="text" name="search" placeholder="Search By Name" className="bg-gray-50 rounded-l-lg p-2 w-3/4 border" />
                        <input type="submit" value="Search" className="p-2 bg-gray-700 text-white w-1/4 cursor-pointer hover:bg-gray-900  rounded-r-lg" />
                    </div>
                </form>
            </div>

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
                        {
                            toys
                                ?
                                <tbody>
                                    {
                                        toys.slice(0, 20).map((toy, indx) => {
                                            return (<tr key={toy._id}>
                                                <td>{indx + 1}</td>
                                                <td>{toy.sellerName}</td>
                                                <td>{toy.toyName}</td>
                                                <td>{toy.subCategory}</td>
                                                <td>${toy.price}K</td>
                                                <td>{toy.availableQuantity}</td>
                                                <th>
                                                    <Link to={`/allToy/${toy._id}`} className="btn btn-warning btn-sm">
                                                        View Details
                                                    </Link >
                                                </th>
                                            </tr>)
                                        })
                                    }
                                </tbody>
                                :
                                <div className="w-1/3 mx-auto my-10">
                                    <progress className="progress w-56"></progress>
                                </div>

                        }
                    </table>

                </div>
            </div>
        </div>
    );
};

export default AllToys;
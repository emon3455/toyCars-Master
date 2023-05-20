/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProviders/AuthProvider";
import Swal from "sweetalert2";
import { useTitle } from "../hooks/useTitle";


const MyToy = () => {

    useTitle("My Toy");

    const [toys, setToys] = useState([]);
    const [sort, setSort] = useState("asc");
    const { user } = useContext(AuthContext);

    useEffect(()=>{
        fetch(`https://car-master-toys-server.vercel.app/specificToys?email=${user?.email}&sort=${sort}`)
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(er => console.log(er.message));
    },[user,sort]);

    const handleDeleteToy =(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-master-toys-server.vercel.app/toys/${id}`,{
                    method: "DELETE",
                })
                .then(res=> res.json())
                .then(data=> {
                    if(data.deletedCount ==1){
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!!',
                            text: 'Toy Deleted Successfully',
                        });
                        const remaining = toys.filter(ty=> ty._id !== id);
                        setToys(remaining);
                    }
                    else{
                        Swal.fire({
                            icon: 'error',
                            title: 'error!!',
                            text: 'Cannot Delete! Try Again',
                        }); 
                        return;
                    }
                })
                .catch(er=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'error!!',
                        text: 'Cannot Delete! Try Again',
                    }); 
                })
            }
        })
        
    }


    return (
        <div className="my-10">
            <h2 className="text-xl lg:text-3xl text-center font-extrabold my-8 text-violet-600">ToyCars Collections from: {user.displayName}({user.email})</h2>
            <div className="p-2 space-x-2 space-y-2 text-right">
                <button onClick={()=> setSort("asc")} className="btn btn-sm font-semibold">Sort By Price- Ascending</button>
                <button onClick={()=> setSort("desc")} className="btn btn-success btn-sm font-semibold">Sort By Price- Descending</button>
            </div>
            <div className="p-2">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Delete</th>
                                <th>Toy Name</th>
                                <th>Toy image</th>
                                <th>Sub Catagory</th>
                                <th>Price</th>
                                <th>Available Qnt</th>
                                <th>Rating</th>
                                <th>Update</th>
                                <th>Descrition</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map((toy, indx) => {
                                    return (<tr key={toy._id}>
                                        <td className="">
                                            {indx + 1}
                                        </td>
                                        <td>
                                            <button onClick={()=>handleDeleteToy(toy._id)} className="btn btn-circle btn-sm btn-outline">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        </td>
                                        <td>{toy.toyName}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="w-16 rounded">
                                                    <img src={toy.picture} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{toy.subCategory}</td>
                                        <td>${toy.price}K</td>
                                        <td>{toy.availableQuantity}</td>
                                        <td>{toy.rating}</td>
                                        
                                        <th>
                                            <Link to={`/updateToy/${toy._id}`} className="btn btn-warning btn-sm">
                                                Update
                                            </Link >
                                        </th>
                                        <td>{toy?.description.length ? toy.description.slice(0,25)+"..." : toy?.description}</td>
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
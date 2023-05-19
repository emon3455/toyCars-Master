/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../authProviders/AuthProvider";

const AddToy = () => {

    const { user } = useContext(AuthContext);
    const [catagory, setCatarory] = useState("Sports Cars");

    const handleAddToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const toyName = form.ToyName.value;
        const picture = form.photo.value;
        const sellerName = form.SellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = catagory;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.description.value;

        const toy = {
            toyName,
            picture,
            sellerName,
            sellerEmail,
            subCategory,
            price,
            rating,
            availableQuantity,
            description
        }
        console.log(toy);

        fetch("http://localhost:5000/toys",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(toy)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Success!!',
                    text: 'Toy SuccessFully Added',
                });

                form.reset();
            }
        })
        .catch(er=> console.log(er))

    }

    return (
        <div className="flex flex-col justify-center items-center my-5">
            <div className="card w-full max-w-6xl shadow-2xl bg-base-100">
                <form onSubmit={handleAddToy} className="card-body ">
                    <h2 className="text-3xl font-bold text-center mb-4">Add Toy</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        <div className="">
                            <input required type="text" name="ToyName" placeholder="Toy name" className="p-2 border-2 rounded-lg w-full" />
                        </div>

                        <div className="">
                            <input required type="text" name="photo" placeholder="Toy Photo URL" className="p-2 border-2 rounded-lg w-full" />
                        </div>

                        <div className="">
                            <input required type="text" name="SellerName" placeholder="Seller Name" defaultValue={user && user?.displayName} className="p-2 border-2 rounded-lg w-full" readOnly />
                        </div>

                        <div className="">
                            <input required type="email" name="sellerEmail" placeholder="Seller Email" defaultValue={user && user?.email} className="p-2 border-2 rounded-lg w-full" readOnly />
                        </div>

                        <div >
                            <select onChange={(e)=> setCatarory(e.target.value)} className="p-2 border-2 rounded-lg w-full">
                                <option selected value="Sports Cars">Sports Cars</option>
                                <option value="Luxirious Vehicles">Luxirious Vehicles</option>
                                <option value="Remote Control Cars">Remote Control Cars</option>
                                <option value="Transport Vehicles">Transport Vehicles</option>
                                <option value="Basic Vehicles">Basic Vehicles</option>
                            </select>
                        </div>

                        <div className="">
                            <input required type="text" name="price" placeholder="Price" className="p-2 border-2 rounded-lg w-full" />
                        </div>

                        <div className="">
                            <input required type="text" name="rating" placeholder="Rating" className="p-2 border-2 rounded-lg w-full" />
                        </div>

                        <div className="">
                            <input required type="text" name="availableQuantity" placeholder="Available Quantity" className="p-2 border-2 rounded-lg w-full" />
                        </div>

                    </div>

                    <div className="">
                        <label className="label">
                            <span className="label-text ">Description</span>
                        </label>
                        <textarea placeholder="description" className="p-2 border-2 rounded-lg w-full h-32" name="description" id="description"></textarea>
                    </div>

                    <button type="submit" className="mt-2 btn btn-warning font-bold">Add</button>

                </form>

            </div>
        </div>
    );
};

export default AddToy;
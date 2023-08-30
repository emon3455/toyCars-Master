/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";


const UpdateToy = () => {

    useTitle("Update Toy");
    const toy = useLoaderData();

    const handleUpdateToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const price = parseInt(form.price.value);
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.description.value;

        if(price==toy.price && rating==toy.rating && availableQuantity == toy.availableQuantity && description == toy.description){
            Swal.fire({
                icon: 'error',
                title: 'Nothing To update!!',
                text: 'Cannot Update! Please update atleast one field',
            });
            
            return;

        }

        const UpdatedToy = {
            price,
            rating,
            availableQuantity,
            description
        }

        fetch(`https://toycars-master-server.onrender.com/toys/${toy._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(UpdatedToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!!',
                        text: 'Toy SuccessFully Updated',
                    });
                    form.reset();

                    // Reset specific fields to remove the default value
                    form.price.value = "";
                    form.rating.value = "";
                    form.availableQuantity.value = "";
                    form.description.value = "";
                }
            })
            .catch(er => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!!',
                    text: 'Cannot Update! Try again.',
                });
            })

    }

    return (
        <div className="flex flex-col justify-center items-center my-5">
            <div className="card w-full max-w-xl shadow-2xl bg-base-100">
                <form onSubmit={handleUpdateToy} className="card-body ">
                    <h2 className="text-3xl font-bold text-center mb-4">Update: <span className="text-violet-600">{toy.toyName}</span> </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input required type="text" defaultValue={toy.price} name="price" placeholder="Price" className="p-2 border-2 rounded-lg w-full" />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input required type="text" defaultValue={toy.rating} name="rating" placeholder="Rating" className="p-2 border-2 rounded-lg w-full" />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input required type="text" defaultValue={toy.availableQuantity} name="availableQuantity" placeholder="Available Quantity" className="p-2 border-2 rounded-lg w-full" />
                        </div>

                    </div>

                    <div className="">
                        <label className="label">
                            <span className="label-text ">Description</span>
                        </label>
                        <textarea required placeholder="description" defaultValue={toy.description} className="p-2 border-2 rounded-lg w-full h-32" name="description" id="description"></textarea>
                    </div>

                    <button type="submit" className="mt-2 btn btn-warning font-bold">Update</button>

                </form>

            </div>
        </div>
    );
};

export default UpdateToy;
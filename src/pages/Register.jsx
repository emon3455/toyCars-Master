import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex flex-col justify-center items-center my-14">
            <div className="card w-full max-w-sm shadow-2xl bg-white shadow-cyan-400/50">
                <form className="card-body">
                    <h2 className="text-3xl font-bold text-center">Register</h2>
                    <p className="text-center text-red-600"></p>
                    <div className="">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input required type="text" name="name" placeholder="name" className="p-2 border-2 rounded-lg w-full" />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="p-2 border-2 rounded-lg w-full" />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="p-2 border-2 rounded-lg w-full" />
                    </div>

                    <div className="">
                        <label className="label">
                            <span className="label-text ">photo url</span>
                        </label>
                        <input required type="text" name="photo" placeholder="photo url" className="p-2 border-2 rounded-lg w-full" />
                    </div>

                    <button type="submit" className="mt-2 btn btn-warning font-bold">Register</button>

                    <p className="text-center text-gray-600">
                        Already have an Account? <Link className="text-sky-600" to="/login">Login</Link>
                    </p>
                    <p className="text-center font-bold">
                        OR
                    </p>

                    <div className="w-full flex justify-between btn btn-ghost mb-2 bg-gray-100">
                        <img className="h-6 w-6" src="https://github.com/emon3455/demo-picture/blob/main/travel-images/google.png?raw=true" alt="" />
                        <span>Continue with Google</span>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Register;
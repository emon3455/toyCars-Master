/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className='mb-12'>
            <div className="flex justify-center mt-16">
                <div className="card w-full max-w-sm shadow-2xl bg-white shadow-cyan-500/50">
                    <form className="card-body">
                        <h2 className="text-3xl font-bold text-center">Login</h2>
                        <p className="text-center text-red-600">  </p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" id="email" className="p-2 border-2 rounded-lg w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" id="password" name="password" placeholder="password" className="p-2 border-2 rounded-lg w-full" />
                        </div>

                        <button type="submit" className="btn btn-warning">Login</button>

                        <p className="text-center text-gray-600">
                            Don't have an Account? <Link className="text-sky-600" to="/register">Create an account</Link>
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
        </div>
    );
};

export default Login;
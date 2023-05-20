/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProviders/AuthProvider";
import Swal from "sweetalert2";
import { useTitle } from "../hooks/useTitle";

const Login = () => {

    useTitle("Login");

    const [error , setError] = useState(null);
    const { signInUser,  googleLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const handleLoginSubmit = (e)=>{
        setError("");
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signInUser(email,password)
        .then((res) => {
            Swal.fire({
                icon: 'success',
                title: 'Success!!',
                text: 'Successfully Loged In',
            });
            console.log(res.user);
            form.reset(); 
            navigate(from, {replace:true});
          })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Action Not Performed',
                text: 'Something went wrong! Try Agauin',
            });
            return;
        });

    }

    const handleGoogleLogin= () =>{
        googleLogin()
        .then((result) => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                icon: 'success',
                title: 'Success!!',
                text: 'Successfully Loged In',
            });
            
            navigate(from, {replace:true});
            
          }).catch((error) => {
            setError(error.message);
            return;
          });
    }

    return (
        <div className='mb-12'>
            <div className="flex justify-center mt-16">
                <div className="card w-full max-w-sm shadow-2xl bg-white shadow-cyan-500/50">
                    <form onSubmit={handleLoginSubmit} className="card-body">
                        <h2 className="text-3xl font-extrabold text-center text-violet-700">Login</h2>
                        <p className="text-center text-red-600"> {error && error} </p>
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

                        <div onClick={handleGoogleLogin} className="w-full flex justify-between btn btn-ghost mb-2 bg-gray-100">
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
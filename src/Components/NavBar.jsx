import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import logo from "../../public/logo.png";

const NavBar = () => {
    return (
        <header className="bg-sky-200 bg-opacity-80 bg-blend-multiply sticky top-0 z-30 w-full">
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52 space-y-2">
                                <li className="text-sm font-semibold"><ActiveLink to="/">Home</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/allToys">All Toys</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/myToys">My Toys</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/addAToy"> Add A Toy</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/blogs">Blogs</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/login">Login</ActiveLink></li>
                            </ul>
                        </div>
                        <div className="md:flex md:items-center">
                            <Link to="/" className="btn btn-ghost w-36 h-10">
                                <img className="w-full h-full" src={logo} alt="" />
                            </Link>
                            <h2 className="text-md lg:text-2xl text-center font-bold">ToyCars Master</h2>
                        </div>
                    </div>

                    <div className="navbar-end space-x-2">

                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 space-x-2">
                                <li className="text-sm font-semibold"><ActiveLink to="/">Home</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/allToys">All Toys</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/myToys">My Toys</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/addAToy"> Add A Toy</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/blogs">Blogs</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/login">Login</ActiveLink></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
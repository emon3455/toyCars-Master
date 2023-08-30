import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blogs from "../pages/Blogs";
import AddToy from "../pages/AddToy";
import MyToy from "../pages/MyToy";
import AllToys from "../pages/AllToys";
import SingleToy from "../pages/SingleToy";
import PrivateRoute from "../privateRoute/PrivateRoute";
import UpdateToy from "../pages/UpdateToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/allToys",
            element: <AllToys></AllToys>
        },
        {
            path: "/allToy/:id",
            element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
            loader: ({params})=> fetch(`https://toycars-master-server.onrender.com/toys/${params.id}`)
        },
        {
            path: "/myToys",
            element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
        },
        {
            path: "/updateToy/:id",
            element: <PrivateRoute> <UpdateToy></UpdateToy> </PrivateRoute>,
            loader: ({params})=> fetch(`https://toycars-master-server.onrender.com/toys/${params.id}`)
        },
        {
            path: "/addAToy",
            element: <PrivateRoute> <AddToy></AddToy> </PrivateRoute>
        },
        {
            path: "/blogs",
            element: <Blogs></Blogs>
        }
      ]
    },
]);

export default router;
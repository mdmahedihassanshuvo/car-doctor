import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/SignUp/SignUp";
import BookService from "../Components/Pages/BookService/BookService";
import Bookings from "../Components/Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: "/",
            element:<Home></Home>,
        },
        {
            path: '/login', 
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <SignUp></SignUp>
        },
        {
          path: '/book/:id',
          element: <PrivateRoute><BookService></BookService></PrivateRoute> ,
          loader: ({params}) => fetch(`https://car-server-hazel.vercel.app/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;
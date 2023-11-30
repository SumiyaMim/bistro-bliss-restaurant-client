import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Main from "../layout/Main";
import Menu from "../pages/Menu";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddItems from "../pages/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem";
import Payment from "../pages/Dashboard/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome";
import Error from "../pages/Error"

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'menu',
            element: <Menu></Menu>
        },
        {
            path: 'shop/:category',
            element: <Shop></Shop>
        },
        {
            path: 'contact',
            element: <Contact></Contact>
        },
      ]
    },
    {
      path: '/signin',
      element: <SignIn></SignIn>
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // normal user dashboard
        {
          path: 'user-home',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'payment-history',
          element: <PaymentHistory></PaymentHistory>
        },
        // admin dashboard
        {
          path: 'admin-home',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'add-items',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manage-items',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'update-item/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`https://bistro-bliss-restaurant-server.vercel.app/menu/${params.id}`)
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
      ]
    }
]);
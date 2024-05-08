import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root'
import Homepage from "../Pages/Home/Homepage/Homepage";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";
import Checkout from "../Pages/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/Home/About/About";
import Services from "../Pages/Home/Services/Services";
import CartDetails from "../components/CartDetails/CartDetails";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/signIn',
        element: <SignIn />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/services',
        element: <Services/>
      },
      {
        path: '/cart-details',
        element: <CartDetails/>,
      },
      {
        path: '/service/:id',
        element: (
          <PrivateRoute>
            <Checkout />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
    ],
  },
]);


export default router;
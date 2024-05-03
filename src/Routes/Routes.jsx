import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root'
import Homepage from "../Pages/Home/Homepage/Homepage";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";
import Checkout from "../Pages/Checkout/Checkout";
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
        path: '/service/:id',
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
    ],
  },
]);


export default router;
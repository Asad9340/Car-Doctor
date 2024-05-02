import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root'
import Homepage from "../Pages/Home/Homepage/Homepage";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement:<Error/>,
    children: [
      {
        path: '/',
        element:<Homepage/>,
      },
      {
        path: '/signIn',
        element:<SignIn/>
      },
      {
        path: '/signUp',
        element:<SignUp/>
      },
    ]
  },
]);


export default router;
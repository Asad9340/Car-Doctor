import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root'
import Homepage from "../Pages/Home/Homepage/Homepage";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
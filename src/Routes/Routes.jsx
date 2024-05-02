import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root'
import Homepage from "../Pages/Home/Homepage/Homepage";
import SignIn from "../Pages/SignIn/SignIn";
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
      }
    ]
  },
]);


export default router;
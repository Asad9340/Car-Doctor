import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root'
import Homepage from "../Pages/Home/Homepage/Homepage";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element:<Homepage/>,
      }
    ]
  },
]);


export default router;
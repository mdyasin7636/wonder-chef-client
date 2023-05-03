import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import ChefDetails from "../pages/ChefDetails/ChefDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/')
        },
        {
          path: '/chefDetails/:id',
          element: <ChefDetails></ChefDetails>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
      ]
    },
  ]);


export default router;
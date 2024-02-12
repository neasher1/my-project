import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import AllFoods from "../Pages/AllFoods";
import AddFoods from "../Pages/AddFoods";
import SingleFoodDetails from "../Pages/SingleFoodDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path:"/contact-us",
          element: <ContactUs></ContactUs>
        },
        {
          path:"/all-foods",
          element: <AllFoods></AllFoods>
        },
        {
          path:"/add-foods",
          element: <AddFoods></AddFoods>
        },
        {
          path: '/employee/:id',
          loader: ({ params }) => {
              return fetch(`http://localhost:5001/all-employee/${params.id}`)
          },
          element: <SingleFoodDetails></SingleFoodDetails>,
      },
      ],
    },
  ]);
  
export default router;
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import AllFoods from "../Pages/AllFoods";
import AddFoods from "../Pages/AddFoods";

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
          path:"/about-us",
          element: <AboutUs></AboutUs>
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
      ],
    },
  ]);
  
export default router;
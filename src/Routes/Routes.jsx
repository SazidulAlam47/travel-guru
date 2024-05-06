import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Booking from "../pages/Booking/Booking";
import Hotels from "../pages/Hotels/Hotels";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("/data/travel.json"),
            },
            {
                path: "/booking/:tag",
                element: <Booking />,
                loader: () => fetch("/data/travel.json"),
            },
            {
                path: "/hotels/:tag",
                element: <Hotels />,
                loader: () => fetch("/data/travel.json"),
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

export default router;

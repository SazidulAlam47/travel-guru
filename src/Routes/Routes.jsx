import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Booking from "../pages/Booking/Booking";
import Hotels from "../pages/Hotels/Hotels";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
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
        ],
    },
]);

export default router;

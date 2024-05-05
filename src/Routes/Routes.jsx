import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Booking from "../pages/Booking/Booking";

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
                path: "/booking/:id",
                element: <Booking />,
                loader: () => fetch("/data/travel.json"),
            },
        ],
    },
]);

export default router;

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div className="font-montserrat">
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;

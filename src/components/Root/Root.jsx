import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div className="md:max-w-6xl px-2 lg:px-0 mx-auto ">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
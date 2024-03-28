import { Link, NavLink } from "react-router-dom";


const Header = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/list">Listed Books</NavLink></li>
        <li><NavLink to="/read">Pages to Read</NavLink></li>
        <li><NavLink to="/new1">New-1</NavLink></li>
        <li><NavLink to="/new2">New-2</NavLink></li>
    </>
    return (
        <div className="navbar py-6 md:py-12 font-workSans">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn md:btn-lg btn-ghost text-2xl md:text-4xl font-bold">Re-Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-1 text-lg">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2 ">
                <button className="btn btn-sm md:btn-md bg-[#40A2D8] text-base-200 md:text-lg">Sign Up</button>
                <button className="btn btn-sm md:btn-md bg-[#0B60B0] text-base-200 md:text-lg">Sign In</button>
            </div>
        </div>
    );
};

export default Header;
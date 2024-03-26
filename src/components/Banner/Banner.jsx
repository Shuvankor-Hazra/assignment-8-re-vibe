import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-96 bg-[#1313130D] p-2 md:p-10 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/vZY0S79/banner.png" className="max-w-sm rounded-lg pb-5 lg:pb-0" />
                <div className="lg:pe-28 ">
                    <h1 className="text-3xl lg:text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <p className="text-lg lg:text-xl py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to="/list" className="btn btn-sm md:btn-md lg:btn-lg bg-[#40A2D8] text-white md:text-lg">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
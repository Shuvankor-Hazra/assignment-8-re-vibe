import { Link } from "react-router-dom";
import { GiSkullCrossedBones } from "react-icons/gi";


const ErrorPage = () => {
    return (
        <div >

            <div className="flex flex-col items-center justify-center gap-5 bg-base-100 h-dvh">
                <div className="text-9xl">
                    <GiSkullCrossedBones />
                </div>
                <h2 className="text-5xl font-medium">Error Page: 404</h2>
                <p className="text-lg font-medium">Oops...! Something went wrong.</p>
                <Link to="/" className="text-green-500 underline text-lg">Go Back To Home</Link>
                <p className="text-lg">Thank you for your patience.</p>
            </div>



        </div>
    );
};

export default ErrorPage;
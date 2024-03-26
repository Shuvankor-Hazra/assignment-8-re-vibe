import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Error Page: Oops...!</h2>
            <Link to="/" className="text-green-500 underline">Go Back To Home!</Link>
        </div>
    );
};

export default ErrorPage;
import { useLoaderData, useParams } from "react-router-dom";
import { getToLocalStorage, getWishToLocalStorage, removeWish, saveToLocalStorage, saveWishToLocalStorage } from "../utility/LocalStorage";
import toast, { Toaster } from "react-hot-toast";


const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();


    const idInt = parseInt(id);
    const book = books.find((book) => book.bookId === idInt)

    const handleAddToRead = () => {
        const getWish = getWishToLocalStorage();
        const isWishExist = getWish.find((localId) => parseInt(localId) === parseInt(id))
        removeWish(isWishExist);
        const getLocal = getToLocalStorage();
        const isExist = getLocal.find((localId) => parseInt(localId) === parseInt(id))
        if (!isExist) {
            saveToLocalStorage(id);
            toast.success('Successfully add to read');
        } else {
            toast.error('Already added read list')
        }
    }

    const handleAddToWish = () => {

        const getToLocal = getToLocalStorage();
        const isToExist = getToLocal.find((localId) => parseInt(localId) === parseInt(id))

        if (!isToExist) {
            const getLocal = getWishToLocalStorage();
            const isExist = getLocal.find((localId) => parseInt(localId) === parseInt(id))

            if (!isExist) {
                saveWishToLocalStorage(id);
                toast.success('Successfully added to wishlist!');
            } else {
                toast.error('Book already added wishlist!')
            }
        } else {
            toast.error('Book already read done!')
        }


    }


    return (
        <div className="md:flex gap-12 mb-20">
            <div className=" md:w-1/2 bg-[#1313130D] p-20 md:p-36 rounded-2xl" >
                <img className="w-full" src={book.image} alt="Book" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-between space-y-5 md:space-y-0 mt-5 md:mt-0" >
                <h2 className="text-3xl md:text-4xl font-bold">{book.bookName}</h2>
                <p className="text-xl font-medium text-[#131313CC]">By: {book.author}</p>
                <p className="text-xl font-medium text-[#131313CC] border-y-2 py-4">{book.category}</p>
                <p><span className="text-lg font-bold flex-grow">Review:</span> {book.review} </p>
                <div className='flex gap-4 text-lg font-bold border-b-2 pb-5'>Tag
                    <span className='btn btn-sm text-[#40A2D8] rounded-full'>#{book.tags[0]}</span>
                    <span className='btn btn-sm text-[#40A2D8] rounded-full'>#{book.tags[1]}</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="pl-0">Number of Pages:</td>
                                <td className="font-bold pl-0">{book.totalPages} </td>
                            </tr>
                            <tr>
                                <td className="pl-0">Publisher:</td>
                                <td className="font-bold pl-0">{book.publisher} </td>
                            </tr>
                            <tr>
                                <td className="pl-0">Year of Publishing:</td>
                                <td className="font-bold pl-0">{book.yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className="pl-0">Rating:</td>
                                <td className="font-bold pl-0">{book.rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex gap-4 ">
                    <button onClick={handleAddToRead} className="btn btn-sm md:btn-md lg:btn-lg bg-[#40A2D8] text-white md:text-lg">Read</button>
                    <button onClick={handleAddToWish} className="btn btn-sm md:btn-md lg:btn-lg bg-[#0B60B0] text-white md:text-lg">Wishlist</button>
                </div>
            </div>
            <div><Toaster position="top-center"
                reverseOrder={true} /></div>
        </div>
    );
};

export default BookDetails;
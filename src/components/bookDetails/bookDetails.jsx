import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();

    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt)
    console.log(book);


    return (
        <div className="md:flex gap-12 mb-20">
            <div className=" md:w-1/2 bg-[#1313130D] p-36 rounded-2xl" >
                <img className="w-full" src={book.image} alt="Book" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-between" >
                <h2 className="text-4xl font-bold">The Catcher in the Rye</h2>
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
                            {/* row 1 */}
                            <tr>
                                <td className="pl-0">Number of Pages:</td>
                                <td className="font-bold pl-0">{book.totalPages} </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td className="pl-0">Number of Pages:</td>
                                <td className="font-bold pl-0">{book.publisher} </td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="pl-0">Year of Publishing:</td>
                                <td className="font-bold pl-0">{book.yearOfPublishing}</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <td className="pl-0">Rating:</td>
                                <td className="font-bold pl-0">{book.rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex gap-4 ">
                    <button className="btn btn-sm md:btn-md lg:btn-lg bg-[#40A2D8] text-white md:text-lg">Read</button>
                    <button className="btn btn-sm md:btn-md lg:btn-lg bg-[#0B60B0] text-white md:text-lg">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
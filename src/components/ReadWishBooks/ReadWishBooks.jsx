import PropTypes from 'prop-types';
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';



const ReadWishBooks = ({ book }) => {
    const navigate = useNavigate();
    return (
        <div className="p-6 border rounded-lg my-10">
            <div className="md:flex gap-6">
                <div className='md:w-1/5'>
                    <img src={book.image} className="w-full rounded-2xl p-6 bg-base-200" />
                </div>
                <div className='flex flex-col'>
                    <h1 className="text-2xl font-bold mt-5 md:mt-0">{book.bookName}</h1>
                    <p className="py-6 text-lg font-bold text-[#131313CC]">By: {book.author}</p>
                    <div className='border-b-2'>
                        <div className='md:flex items-center gap-6  pb-5 text-lg font-bold'>
                            <div className='flex items-center gap-4 md:gap-6'>Tag
                                <span className='btn btn-sm md:btn-md md:text-xl font-semibold text-[#40A2D8] rounded-full'>#{book.tags[0]}</span>
                                <span className='btn btn-sm md:btn-md md:text-xl font-semibold text-[#40A2D8] rounded-full'>#{book.tags[1]}</span>
                            </div>
                            <div>
                                <span className='md:flex items-center gap-3 '> <IoCalendarNumberOutline className='text-2xl py-5 md:py-0' />
                                    Year Of Publishing: {book.yearOfPublishing}
                                </span>
                            </div>
                        </div>
                        <div className='md:flex items-center gap-5 pb-5 text-xl font-bold '>
                            <span className='flex items-center gap-3'><GoPeople className='text-2xl' />Publisher: {book.publisher}</span>
                            <span className='flex items-center gap-3 py-5 md:py-0'><IoBookOutline className='text-2xl' />Pages: {book.totalPages}</span>
                        </div>
                    </div>
                    <div className='flex gap-3 md:gap-6 text-lg font-bold pt-5'>
                        <span className='btn btn-sm md:btn-md md:text-xl font-semibold text-[#328EFF] rounded-full bg-[#328EFF26]'>Category: {book.category}</span>
                        <span className='btn btn-sm md:btn-md md:text-xl font-semibold text-[#FFAC33] rounded-full bg-[#FFAC3326]'>Rating: {book.rating}</span>
                        <button onClick={()=>navigate(`/details/${book.bookId}`)} className="btn btn-sm md:btn-md md:text-lg font-semibold text-white rounded-full bg-[#0B60B0]">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadWishBooks.propTypes = {
    book: PropTypes.object
}

export default ReadWishBooks;
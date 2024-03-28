import PropTypes from 'prop-types';
import { MdOutlineStarOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Book = ({ book }) => {

    const navigate = useNavigate();

    const {bookId, image, tags, bookName, author, rating, category } = book;


    return (
        <div onClick={()=>navigate(`/details/${bookId}`)} className="card border-2 cursor-pointer">
            <figure className='m-6 p-4 rounded-2xl bg-[#F3F3F3]'><img src={image} alt="Book" /></figure>
            <div className='ms-6 flex gap-4'>
                <span className='btn btn-sm text-[#40A2D8] rounded-full'>{tags[0]}</span>
                <span className='btn btn-sm text-[#40A2D8] rounded-full'>{tags[1]}</span>
            </div>
            <div className="card-body p-6 font-workSans">
                <h2 className="card-title">{bookName} </h2>
                <p className='font-medium text-[#131313CC] border-b-2 border-dashed pb-6'>By: {author} </p>
            </div>
            <div className='flex justify-between p-6 pt-0 font-medium text-[#131313CC] font-workSans'>
                <h2>{category} </h2>
                <h2 className='flex items-center gap-2 font-medium text-[#131313CC]'>{rating} <MdOutlineStarOutline className='text-xl'/></h2>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object,
}

export default Book;
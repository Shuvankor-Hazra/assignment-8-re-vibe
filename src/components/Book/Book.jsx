import PropTypes from 'prop-types';

const Book = ({ book }) => {
    console.log(book)

    const { image, tags, bookName, author, rating, category } = book;

    return (
        <div className="card border">
            <figure className='m-6 p-4 rounded-2xl bg-[#F3F3F3]'><img src={image} alt="Book" /></figure>
            <div className='ms-6 flex gap-4'>
                <span className='btn btn-sm text-[#40A2D8] rounded-full'>{tags[0]}</span>
                <span className='btn btn-sm text-[#40A2D8] rounded-full'>{tags[1]}</span>
            </div>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object,
}

export default Book;


// ---------------
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
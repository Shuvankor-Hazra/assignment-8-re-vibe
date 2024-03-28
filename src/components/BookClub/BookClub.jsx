

const BookClub = () => {
    return (
        <div className="md:flex items-center gap-5 p-12 bg-base-200 rounded-xl md:h-[500px] mb-20">
            <div className="md:w-1/2 flex items-center justify-center ">
                <img src="https://i.ibb.co/C6fvmT2/book1.png" alt="" />
                <img src="https://i.ibb.co/C6fvmT2/book1.png" alt="" />
            </div>
            <div className="md:w-1/2 space-y-5" >
                <h2 className="text-2xl md:text-4xl font-bold mt-6 md:mt-0">Building community through books</h2>
                <p className="text-lg md:text-2xl font-medium">Organize your club, start a new one, or find your book people</p>
                <p>Join our vibrant book club community! Engage in lively discussions, discover new reads, and connect with fellow book enthusiasts. Dive into captivating stories together and share your insights in our welcoming and inclusive space. Expand your literary horizons with us!</p>
                <button className="btn bg-[#0B60B0] text-white text-lg">Start A Club</button>
            </div>
        </div>
    );
};

export default BookClub;
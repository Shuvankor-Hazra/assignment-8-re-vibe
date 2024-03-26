import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        fetch('books.json')
        .then((res)=>res.json())
        .then((data)=> setBooks(data));
    }, [])

    return (
        <div className="mb-10 md:mb-24">
            <h2 className="text-2xl lg:text-4xl font-bold text-center mt-10 md:mt-16 pb-5 md:pb-10">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map((book)=> <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;
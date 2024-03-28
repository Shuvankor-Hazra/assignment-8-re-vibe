import { BsChevronDoubleDown } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getToLocalStorage, getWishToLocalStorage } from "../utility/LocalStorage";
import ReadWishBooks from "../ReadWishBooks/ReadWishBooks";
import { useEffect, useState } from "react";

const ListedBooks = () => {

    const [readSortBook, setReadSortBook] = useState([]);
    const [wishSortBook, setWishSortBook] = useState([]);

    const [tab, setTab] = useState(0);

    const books = useLoaderData();




    useEffect(() => {

        const readBooks = [];
        const wishBooks = [];

        const allReadBooks = getToLocalStorage();
        const allWishBooks = getWishToLocalStorage();

        for (const id of allReadBooks) {
            const allBooks = books.find((book) => parseInt(book.bookId) === parseInt(id));
            if (allBooks) {
                readBooks.push(allBooks);
            }
        }

        for (const id of allWishBooks) {
            const allBooks = books.find((book) => parseInt(book.bookId) === parseInt(id));
            if (allBooks) {
                wishBooks.push(allBooks);
            }

        }
        setReadSortBook(readBooks);
        setWishSortBook(wishBooks);
    }, [books]);

    const handleSortingRating = () => {
        if (tab === 0) {
            const sortedReadData = [...readSortBook].sort((a, b) => b.rating - a.rating);
            setReadSortBook(sortedReadData);
        } else {
            const sortedWishData = [...wishSortBook].sort((a, b) => b.rating - a.rating);
            setWishSortBook(sortedWishData);
        }
    }

    const handleSortingPages = () => {
        if (tab === 0) {
            const sortedReadData = [...readSortBook].sort((a, b) => b.totalPages - a.totalPages);
            setReadSortBook(sortedReadData);
        } else {
            const sortedWishData = [...wishSortBook].sort((a, b) => b.totalPages - a.totalPages);
            setWishSortBook(sortedWishData);
        }
    }

    const handleSortingYear = () => {
        if (tab === 0) {
            const sortedReadData = [...readSortBook].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setReadSortBook(sortedReadData);
        } else {
            const sortedWishData = [...wishSortBook].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setWishSortBook(sortedWishData);
        }
    }




    return (
        <>
            <div className="text-center text-xl md:text-3xl font-bold bg-[#1313130D] p-4 md:p-6 rounded-xl">
                <h1>Books</h1>
            </div>
            <div className="text-center py-8">
                <details className="dropdown">
                    <summary className="m-1 btn btn-sm md:btn-md bg-[#40A2D8] text-base-200 md:text-lg">Sort By<BsChevronDoubleDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-lg ">
                        <li onClick={handleSortingRating}><a>Rating</a></li>
                        <li onClick={handleSortingPages}><a>Number of pages</a></li>
                        <li onClick={handleSortingYear}><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>

            <div className="pb-8">
                <Tabs>
                    <TabList>
                        <Tab onClick={() => { setTab(0) }}>Read Books</Tab>
                        <Tab onClick={() => { setTab(1) }}>Wishlist Books</Tab>
                    </TabList>
                    <TabPanel>
                        {
                            readSortBook.map((book) => <ReadWishBooks key={book.bookId} book={book}></ReadWishBooks>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            wishSortBook.map((book) => <ReadWishBooks key={book.bookId} book={book}></ReadWishBooks>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default ListedBooks;
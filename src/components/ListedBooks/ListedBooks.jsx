import { BsChevronDoubleDown } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getToLocalStorage, getWishToLocalStorage } from "../utility/LocalStorage";

const ListedBooks = () => {

    const readBooks = [];
    const wishBooks = [];

    const books = useLoaderData();

    const allReadBooks = getToLocalStorage();
    const allWishBooks = getWishToLocalStorage();
    console.log(books,allReadBooks,allWishBooks)

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
    console.log(readBooks, wishBooks)

    return (
        <>
            <div className="text-center text-3xl font-bold bg-[#1313130D] p-6 rounded-2xl">
                <h1>Books</h1>
            </div>
            <div className="text-center py-8">
                <details className="dropdown">
                    <summary className="m-1 btn">Sort By<BsChevronDoubleDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>

            <div className="pb-8">
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>
                    <TabPanel>
                        <h2>Read Books</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Wishlist Books</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default ListedBooks;
import { BsChevronDoubleDown } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    return (
        <>
            <div className="text-center text-3xl font-bold bg-[#1313130D] p-6 rounded-2xl">
                <h1>Books</h1>
            </div>
            <div className="text-center py-8">
                <details className="dropdown">
                    <summary className="m-1 btn">Sort By<BsChevronDoubleDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>By Name</a></li>
                        <li><a>By Date</a></li>
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
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
            </div>
        </>
    );
};

export default ListedBooks;
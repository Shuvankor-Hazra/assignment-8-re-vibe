import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import BookDetails from './components/bookDetails/bookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/list',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/details/:id',
        element: <BookDetails></BookDetails>,
        loader: ()=>fetch('books.json')
      },
      {
        path:'/read',
        element: <PagesToRead></PagesToRead>
      },
      {
        path:'/new1',
        element: <div>New -1</div>
      },
      {
        path:'',
        element: <div>New -2</div>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

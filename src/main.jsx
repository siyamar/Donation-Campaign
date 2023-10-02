import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Statistics from './Pages/Statistics/Statistics';
import ErrorPages from './Pages/ErrorPages/ErrorPages';
import ShowDetails from './Components/ShowDetails/ShowDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/donations',
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/donation/:id',
        element: <ShowDetails></ShowDetails>,
        loader: ()=> fetch('./data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

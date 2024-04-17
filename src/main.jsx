import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Parking from './Components/Parking/Parking.jsx';
import VechilePark from './Components/VechilePark/VechilePark.jsx';
import Unparking from './Components/Unparking/Unparking.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path:"/",
       element:<Parking/>},
       {path:"parking",
      element:<VechilePark/>},
       {path:"unparking",
      element:<Unparking/>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

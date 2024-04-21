import React from 'react'
import Parking from '../Components/Parking/Parking.jsx';
import VechilePark from '../Components/VechilePark/VechilePark.jsx';
import Unparking from '../Components/Unparking/Unparking.jsx';
import Main from '../Components/Main/Main.jsx';
import { Outlet } from "react-router-dom"

const Layout1 = () => {
  return (
    <>
     
     <Main/>
     <Outlet/>

    </>
  )
}

export default Layout1
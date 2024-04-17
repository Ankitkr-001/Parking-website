import Main from "./Components/Main/Main"
import Navbar from "./Components/Navbar/Navbar"
import Parking from "./Components/Parking/Parking"
import Unparking from "./Components/Unparking/Unparking"
import VechilePark from "./Components/VechilePark/VechilePark"
import { Outlet } from "react-router-dom"

function App() {


  return (
    <>
     <Navbar/>
     <Main/>
     <Outlet/>
     {/* <Parking/> */}
     {/* <VechilePark/> */}
     {/* <Unparking/> */}
    </>
  )
}

export default App

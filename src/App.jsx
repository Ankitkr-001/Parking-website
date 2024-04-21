import AboutUs from "./Components/AboutUs/AboutUs"
import ConceptUsed from "./Components/ConceptUsed/ConceptUsed"
import Feedback from "./Components/Feedback/Feedback"
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
     <Outlet/>
     
    </>
  )
}

export default App

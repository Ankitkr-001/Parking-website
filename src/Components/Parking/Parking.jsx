import React from "react";
import "./Parking.css";
import { Link } from "react-router-dom";


const Parking = () => {
  return (
    <div className="parking">

      <div className="main-title">
        <h1 >no need to wait more </h1>
        <div className="sub-title">
      <h2 >get your parking spot</h2>
      </div>
      </div>
      
      

      <div className="parking-left">
        <h1>Parking</h1>
        <Link to={'/parking'}><button className="park-btn">Click here for parking</button></Link>
      </div>
      <div className="parking-right">
        <h1>unparking</h1>
        <Link to={'/unparking'}><button className="park-btn">Click here for unparking</button></Link>
      </div>
    </div>
  );
};

export default Parking;

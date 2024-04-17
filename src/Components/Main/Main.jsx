import React from 'react'
import './Main.css'
import car from '../../assets/car.png';


const Main = () => {
  return (
    <div className='main'>
        <div className="title">
            <h1>
               <span className='white-color'>PARKING </span>  <span className='text-color'>LOT</span>
                <br />
                <span className='text-color'>MANAGEMENT </span> <span className='white-color'>SYSTEM</span>
            </h1>
        </div>
        <div className="move-car">
            <img src={car} alt="" />
        </div>
    </div>
  )
}

export default Main
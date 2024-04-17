import React from 'react'
import './Unparking.css'
import { Link } from 'react-router-dom'
import  { useState } from "react";


const Unparking = () => {
  

    const [hideText,setHideText] = useState(true)



    const showText = ()=>{
        hideText ?  setHideText(false) : setHideText();
    }
  return (
    <div className='unparking'>
        <form className='un-form'>
        <label htmlFor="">Enter Your Unique ID: </label>
        <input type="text"  required/>
        <br />
        <br />
        <h3 className='un-title'>Total Bill - </h3>
        {/* <label htmlFor="">Select vehicle type:</label>
        <select name="" id="" required>
          <option value="2-wheeler">2 Wheeler</option>
          <option value="4-wheeler">4 Wheeler</option>
        </select>
        <br /><br />
        <label htmlFor="">Your Name:</label>
        <input type="text" required /> */}

        <button className="vechile-park-btn" type="submit" onClick={showText} >Pay Your Bill</button>
        
        <Link to={'/parking'}><button className="vechile-park-btn">parking</button></Link>
        <Link to={'/'}><button className="vechile-park-btn">Go Back</button></Link>

      </form>
      <div className="parktext">
      <h3 className={`${hideText ? 'hide-text':'show-text'}`}>TRANSACTION SUCCESSFUL</h3>
      </div>
    </div>
  )
}

export default Unparking
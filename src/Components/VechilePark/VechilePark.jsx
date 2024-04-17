import React, { useState } from "react";
import "./VechilePark.css";
import { Link } from "react-router-dom";

const VechilePark = () => {

    const [hideText,setHideText] = useState(true)



    const showText = ()=>{
        hideText ?  setHideText(false) : setHideText();
    }
  return (
    <div className="vechilepark">
      <form>
        <label htmlFor="">Enter Vechile Number:</label>
        <input type="text"  required/>
        <br />
        <br />
        <label htmlFor="">Select vehicle type:</label>
        <select name="" id="" required>
          <option value="2-wheeler">2 Wheeler</option>
          <option value="4-wheeler">4 Wheeler</option>
        </select>
        <br /><br />
        <label htmlFor="">Your Name:</label>
        <input type="text" required />

        <button className="vechile-park-btn" type="submit" onClick={showText}>Submit</button>
        <Link to={'/unparking'}><button className="vechile-park-btn">Unparking</button></Link>
        <Link to={'/'}><button className="vechile-park-btn">Go Back</button></Link>

      </form>
      <div className="parktext">
      <h3 className={`${hideText ? 'hide-text':'show-text'}`}>VECHILE PARKED SUCESSFULLY.</h3>
      <h3 className={`${hideText ? 'hide-text':'show-text'}`}>YOUR UNIQUE ID :</h3>
      <h3 className={`${hideText ? 'hide-text':'show-text'}`}>YOUR SPOT :</h3>
      </div>
    </div>
  );
};

export default VechilePark;

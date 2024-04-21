import React from 'react'
import './Feedback.css'

const Feedback = () => {
  return (
    <div className='feedback'>
      <form className='feedback-form'>
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

        <button className="vechile-park-btn" type="submit"  >Submit</button>
        {/* <Link to={'/unparking'}><button className="vechile-park-btn">Unparking</button></Link>
        <Link to={'/'}><button className="vechile-park-btn">Go Back</button></Link> */}

      </form>
    </div>
  )
}

export default Feedback
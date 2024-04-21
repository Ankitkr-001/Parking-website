import React from "react";
import "./Feedback.css";

import { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with the rating value
    console.log("Submitted rating:", rating);
  };

  return (
    <div className="feedback">
      <form className="rating-form" onSubmit={handleSubmit}>
        <label htmlFor="">Enter Your Name:</label>
        <input type="text" required />
        <br />
        <br />
        <label htmlFor="">Enter Your Email:</label>
        <input type="email" required />
        <br />
        <br />
        <label htmlFor="">What would you like to see improved</label>
        <input type="text" required />
        <br />
        <br />
        
        <label className="rating-label">
          Rate us:
          <br />
          <input
            className="rating-input"
            type="radio"
            name="rating"
            value="1"
            checked={rating === 1}
            onChange={handleRatingChange}
          />
          1
          &nbsp;
          &nbsp;
          <input
            className="rating-input"
            type="radio"
            name="rating"
            value="2"
            checked={rating === 2}
            onChange={handleRatingChange}
          />
          
          2
          &nbsp;
          &nbsp;
          <input
            className="rating-input"
            type="radio"
            name="rating"
            value="3"
            checked={rating === 3}
            onChange={handleRatingChange}
          />
         
          3
          &nbsp;
          &nbsp;
          <input
            className="rating-input"
            type="radio"
            name="rating"
            value="4"
            checked={rating === 4}
            onChange={handleRatingChange}
          />
         
          4
          &nbsp;
          &nbsp;
          <input
            className="rating-input"
            type="radio"
            name="rating"
            value="5"
            checked={rating === 5}
            onChange={handleRatingChange}
          />
          5
          
        </label>

        
        <br />
        <button className="vechile-park-btn" type="submit">Submit</button>
        <br />
      </form>
    </div>
  );
};

export default Feedback;

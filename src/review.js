import React from "react";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";

const Review = ({ data, handleDelete }) => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = (e) => {
    setDisplay(!display);
  };

  // start
  const reviews = data.map((item) => {
    const { name, id, review } = item;
    return (
      <main className="review-section" key={id}>
        <div className="index">
          <p>{name.charAt(0)}</p>
        </div>
        <div className="info">
          <h3>{name}</h3>
          <p>
            {!display ? review.substr(0, 150) : review}
            {review.length < 150 ? (
              ""
            ) : (
              <button className="display-btn" onClick={handleDisplay}>
                {!display ? "see more" : "see less"}
              </button>
            )}
          </p>
          <button className="delete-btn" onClick={() => handleDelete(id)}>
            {/* <FaTrash /> */}
            delete
          </button>
        </div>
      </main>
    );
  });
  return reviews;
};

export default Review;

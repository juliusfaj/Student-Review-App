import React from "react";
import { useState, useEffect } from "react";
import Review from "./review";

function App() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState({
    status: false,
    type: "danger",
    message: "review removed",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !review) {
      console.log("input a value");
      setAlert({
        status: true,
        type: "danger",
        message: "add a review",
      });
    } else {
      setData([...data, { id: new Date().getTime().toString(), name, review }]);
      setName("");
      setReview("");
      setAlert({
        status: true,
        type: "success",
        message: "review added",
      });
    }
  };

  useEffect(() => {
    const clearAlert = () => {
      setAlert({ status: false });
    };

    const setClearAlert = setTimeout(() => {
      clearAlert();
    }, 3000);

    return () => {
      clearTimeout(setClearAlert);
    };
  }, [alert]);

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setAlert({
      status: true,
      type: "danger",
      message: "review removed",
    });
  };

  return (
    <section className="container">
      {alert.status ? (
        <p className={`alert alert-${alert.type}`}>{alert.message}</p>
      ) : (
        ""
      )}
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">fullname</label>
            <input
              type="text"
              placeholder="fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="review">review</label>
            <textarea
              id="review"
              cols="30"
              rows="10"
              placeholder="review here"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <div className="btn-container">
            <button className="submit-btn">submit</button>
          </div>
        </form>
      </div>
      <div className="review-container">
        <Review data={data} handleDelete={handleDelete} />
      </div>
    </section>
  );
}

export default App;

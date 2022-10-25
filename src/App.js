import "./App.scss";
import star from "./images/icon-star.svg";
import thankYou from "./images/illustration-thank-you.svg";
import React, { useState } from "react";

function App() {
  const [ratingList, setRatingList] = useState(["1", "2", "3", "4", "5"]);
  const [ratingValue, setRatingValue] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleRating = (e) => {
    setRatingValue(e.target.value);
    setIsClicked(true);
  };
  const handleSubmit = () => {
    setIsSubmited(true);
  };

  if (isSubmited) {
    return (
      <main>
        <section className="container">
          <div className="img-container">
            <img src={thankYou} alt="thankYou" />
          </div>
          <div className="rating-hipster">
            You selected {ratingValue} out of 5
          </div>
          <h1 className="submit-head">Thank you!</h1>
          <p className="submit-para">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="container">
        <div className="star-container">
          <img src={star} alt="star" />
        </div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="rating-count">
          {ratingList.map((val, i) => {
            return (
              <button
                key={i}
                className={
                  isClicked && ratingValue === val
                    ? "rating-btn btn-clicked"
                    : "rating-btn"
                }
                value={val}
                onClick={handleRating}
              >
                {val}
              </button>
            );
          })}
        </div>
        <button className="btn" onClick={handleSubmit}>
          submit
        </button>
      </section>
      {/* <!-- Rating state start -->



<!-- Rating state end -->

<!-- Thank you state start -->

You selected <!-- Add rating here --> out of 5

Thank you!

We appreciate you taking the time to give a rating. If you ever need more support, 
don’t hesitate to get in touch!

<!-- Thank you state end --> */}
    </main>
  );
}

export default App;

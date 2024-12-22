import React from "react";
import { useNavigate } from "react-router-dom";

function Liked({ likedQuotes }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Liked Quotes</h1>
      {likedQuotes.length > 0 ? (
        likedQuotes.map((quote, index) => (
          <div key={index}>
            <p>{quote.quote}</p>
            <p>- {quote.author}</p>
          </div>
        ))
      ) : (
        <p>No liked quotes yet.</p>
      )}
      <br />
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

export default Liked;

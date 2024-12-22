import React from "react";
import { useNavigate } from "react-router-dom";

function Dislike({ dislikedQuotes }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dis Liked Quotes</h1>
      {dislikedQuotes.length > 0 ? (
        dislikedQuotes.map((quote, index) => (
          <div key={index}>
            <p>{quote.quote}</p>
            <p>- {quote.author}</p>
          </div>
        ))
      ) : (
        <p>No disliked quotes yet.</p>
      )}
      <br />
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

export default Dislike;

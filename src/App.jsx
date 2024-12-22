import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Liked from "./Liked.jsx";
import Dislike from "./Dislike.jsx";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [likedQuotes, setLikedQuotes] = useState([]);
  const [dislikedQuotes, setDislikedQuotes] = useState([]);

  const fetchQuotes = async () => {
    const response = await fetch("https://dummyjson.com/quotes");
    const data = await response.json();
    setQuotes(data.quotes.slice(0, 5)); 
  };

  const likeQuote = (quote) => {
    if (!likedQuotes.includes(quote)) {
      setLikedQuotes([...likedQuotes, quote]);
    }
  };

  const dislikeQuote = (quote) => {
    if (!dislikedQuotes.includes(quote)) {
      setDislikedQuotes([...dislikedQuotes, quote]);
    }
    setQuotes(quotes.filter((q) => q !== quote));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              fetchQuotes={fetchQuotes}
              quotes={quotes}
              likeQuote={likeQuote}
              dislikeQuote={dislikeQuote}
            />
          }
        />
        <Route path="/liked" element={<Liked likedQuotes={likedQuotes} />} />
        <Route
          path="/disliked"
          element={<Dislike dislikedQuotes={dislikedQuotes} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

function Home({ fetchQuotes, quotes, likeQuote, dislikeQuote }) {
  const navigate = useNavigate();

  return (
    <>
      <h1>Quote's By Kailash Parihar</h1>
      <br />
      <button onClick={fetchQuotes}>Generate Quotes</button>
      <br />
      <br />
      <button
        onClick={() => navigate("/liked")}
        style={{ marginRight: "10px" }}
      >
        Liked Quotes
      </button>
      <button
        onClick={() => navigate("/disliked")}
        style={{ marginRight: "10px" }}
      >
        Disliked Quotes
      </button>
      {quotes.map((quote, index) => (
        <div key={index}>
          <p>{quote.quote}</p>
          <p>- {quote.author}</p>
          <button
            onClick={() => likeQuote(quote)}
            style={{ marginRight: "10px" }}
          >
            Like
          </button>
          <button onClick={() => dislikeQuote(quote)}>Dislike</button>
        </div>
      ))}
      <br />
    </>
  );
}

export default App;

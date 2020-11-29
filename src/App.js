import React, { useState, useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Movies from "./components/Movies/Movie";
import Nav from "./components/Nav/Nav";
import "./App.css";

import roll from "./Bean.gif";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=356c51928b82e523a9a48f9eb08e771b&page=2";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=356c51928b82e523a9a48f9eb08e771b&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="loading">
        <img src={roll} alt="roll" />
      </section>
    );
  }

  // THE SEARCH FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
          if (data.length === 0) {
            return <p>Not found</p>;
          }
        });
      setSearchTerm("");
    }
  };

  // THE HANDLE CHANGE FUNCTION
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Router>
      <Nav
        searchTerm={searchTerm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Movies movies={movies} />
    </Router>
  );
}

export default App;

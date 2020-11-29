import React from "react";
import Display from "./Display";
import "./Movie.css";

const Movie = ({ movies }) => {
  return (
    <div className="head-container">
      <div className="Movie-container">
        {movies.length > 0 &&
          movies.map((movie) => {
            return <Display key={movie.id} {...movie} />;
          })}
      </div>
    </div>
  );
};

export default Movie;

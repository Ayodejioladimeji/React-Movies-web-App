import React, {useState, useEffect} from 'react'
import Display from './Display'
import './Movie.css'


const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=356c51928b82e523a9a48f9eb08e771b&page=2";



  const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=356c51928b82e523a9a48f9eb08e771b&query=";

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

      
    useEffect(() => {

        fetch(FEATURED_API)
          .then((res) => res.json())
          .then((data) => {
            setMovies(data.results);
            console.log(data.results)
          })
    }, []);
      
      // THE SEARCH FUNCTION
      const handleSubmit = (e)=>{
        e.preventDefault();

        if(searchTerm){
            fetch(SEARCH_API + searchTerm)
            .then((res) => res.json())
            .then((data) => {
            setMovies(data.results);
          });
          setSearchTerm("");
        }
      }
  
      // THE HANDLE CHANGE FUNCTION
      const handleChange = (e)=>{
          setSearchTerm(e.target.value);
      }

    return (
        <div className="head-container">
          <header>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter your search" value={searchTerm} onChange={handleChange}/>
            </form>
          </header>
        
          <div className="Movie-container">
              {movies.length > 0 && movies.map((movie)=>{
                  return(
                    <Display key={movie.id} {...movie} />
                  )
              })}
          </div>
        </div>
    )
}

export default Movie
import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote)=>{
    if(vote >=8){
        return "green";
    }
    else if(vote <=6){
        return "orange";
    }
    else {
        return "red";
    }
}

const Display = ({title, poster_path, overview, vote_average}) => {
    return (
        <div className="movie">
            <img src={poster_path ? IMG_API + poster_path : "https://images.unsplash.com/photo-1547130542-00f463cf8c0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"} alt={title}/>

            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Display

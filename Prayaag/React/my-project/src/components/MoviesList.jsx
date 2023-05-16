import React, { useState, useEffect } from 'react'

function MoviesList({...movieTitles}) {

    const allMovies = [];
    const length = Object.keys(movieTitles).length;
    for (let i = 1; i <= length; i++) {
        const movieKey = `movie${i}`;
        if (movieKey in movieTitles) allMovies.push(movieTitles[movieKey]);
    }


    useEffect(() => {

    })

    const [ movies, setMovies ] = useState(allMovies);

    const removeMovie = (title) => {
        setMovies(movies.filter(mv => mv !== title));
    }

    const updateMovies = (userIn) => {
        userIn === '' ? setMovies(allMovies) : setMovies(allMovies.filter(mv => mv.toLowerCase().includes(userIn)))
    }

    return (
        <div>
            <input onChange = {e => updateMovies(e.target.value)} className = "m-2" placeholder = 'Search for a Movie'></input>
            <ul>
                {movies.map((title, id) => {
                    return (<div key = {id}>
                        <li> {title} <span> &#128512; </span><button onClick = {() => removeMovie(title)} className = "badge bg-secondary m-2">Delete</button></li>
                    </div>);
                })}
            </ul>
        </div>
  
    )
}



MoviesList.defaultProps = {
    movie1 : 'Some Movie'
}

export default MoviesList;
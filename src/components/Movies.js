import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import movieTrailer  from 'movie-trailer';
import Youtube from 'react-youtube';

function Movies(props) {
    const [ movies, setMovies] = useState([])
    const [ videoId, setVideoId] = useState('')

    useEffect(() => {
        Axios.get(props.url)

        .then((output) => {
            console.log(output.data.results);
    
            setMovies(output.data.results)
        })
        .catch((error) => {
            console.log(error)
        })
    
    },[])

    const getMovieName = (movieName) => {
        console.log(movieName)
        movieTrailer(movieName)
            .then((output) => {
                console.log(output)
                const myVideoId  = new URLSearchParams(new URL(output).search).get("v");
                console.log(myVideoId);
                setVideoId(myVideoId);
            })
            .catch((error) => {
                console.log(error)
            })
    }
  return (
    <div className='container'>
       <h1 style={{textAlign:'left'}}> {props.title}</h1>

    <div className='imagecontainer'>
        {
        movies.map((i) => {
           return  <img onClick={() => getMovieName(i.title)} src={`https://image.tmdb.org/t/p/w185/${i.poster_path}`} />
        })
    }
    </div>
    {videoId && <Youtube videoId={videoId}  />} 
   </div>

  )
}

export default Movies
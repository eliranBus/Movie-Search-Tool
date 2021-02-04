import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from "../redux/actions/movieActions";
import image from "../assets/images/no-image.png";
import imdb from "../assets/images/imdb.png";
import "../styles/movie.css";
import Logo from './Logo';
import Spinner from "./Spinner";

function Movie() {
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const dispatch = useDispatch();
  const specificMovie = useSelector((state) => state.movieReducer.specificMovie);
  const { movieTitle } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      getMovieDetails(movieTitle, dispatch);
    }, 1500);
  }, [dispatch, movieTitle]);

  function toIMDB() {
    window.open(`https://www.imdb.com/title/${specificMovie.imdbID}/`);
  }

  return (
    <>
    <div className="top-bar">
        <Logo/>
        <p className="return" onClick={() => history.goBack()}>
        Back to search results &#10154;
      </p>
    </div>
    { loading &&
    <>
      <div className="spinner">
        <Spinner />
      </div>
      <div className="devider"></div>
    </>
    }
    {!loading && !specificMovie && 
    <div className="movie-info-container">
      <div className="specific-movie-card">   
        <div className="specific-movie-image">
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={image} style={{width: '30vw'}} alt="no-image" />
        </div>
      <div className="specific-movie-info" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h3>No Data Found.<br/>Please try again.</h3>
      </div>
    </div>
  </div>
}
{!loading && specificMovie && 
    <div className="movie-info-container">
      <div className="specific-movie-card">   
        <div className="specific-movie-image">
            <img src={specificMovie.Poster} alt=""/> 
        </div>
        <div className="specific-movie-info">
          <h2>{specificMovie.Title}</h2>
          <div className="aligned">
            <p><strong>IMDB Rating:</strong>&nbsp;{specificMovie.imdbRating}</p>
            <p><strong>Release Date:</strong>&nbsp;{specificMovie.Released}</p>
            <p><strong>Length:</strong>&nbsp;{specificMovie.Runtime}</p>
            <p><strong>Genre:</strong>&nbsp;{specificMovie.Genre}</p>
            <p><strong>Director:</strong>&nbsp;{specificMovie.Director}</p>
            <p><strong>Country:</strong>&nbsp;{specificMovie.Country}</p>
            <p><strong>Actors:</strong>&nbsp;{specificMovie.Actors}</p>
            <p className="plot">&nbsp;{specificMovie.Plot}</p>
          </div>
          <button onClick={toIMDB}>To <img className="imdb" src={imdb} alt="imdb logo"/> movie page</button>
        </div>
      </div>
    </div>
    }
    </>
  );
}

export default Movie;

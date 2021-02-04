import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Spinner from "./Spinner";
import image from "../assets/images/no-image.png";
import Logo from './Logo';
import arrow from "../assets/images/arrow.png";
import { searchMovies } from "../redux/actions/searchActions";
import { setMovieResult } from "../redux/actions/movieActions";

function SearchMovies() {

  const dispatch = useDispatch();
  const {movies, numOfResults, loading} = useSelector((state) => state.searchReducer);

  const [query, setQuery] = useState("");
  let history = useHistory();

  const moreInfo = useCallback((title) => {
    dispatch(setMovieResult(title));
    history.push(`/movie-info/${title}`);
}, [dispatch, history])


  return (
    <>
      <div className="top-bar">
        <Logo/>
        <form onSubmit={(e) => searchMovies(e, query, dispatch)}>
          <input
            type="text"
            placeholder="i.e Jurassic Park"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            className="input"
          />
          <button type="submit" disabled={!query} className="submit"></button>
        </form>
      </div>

      {loading && 
        <div className="spinner">
          <Spinner />
        </div>
      }

      {!loading && 
        <div className="cta" style={movies && movies.length > 0 ? { display: "none"} : { display: "block"}}>
          <h3>Type the name of the movie<img src={arrow} className="arrow" alt="arrow icon"/></h3>
        </div>
      }

      <div className="results-container">

        {!loading && movies.length !== 0 && 
        <>
        <div>
          <div className="separator">
            <div className="line" />
            <h2>SEARCH RESULTS</h2>
            <div className="line" />
          </div>
          <h3 className="total-results">
            Total Results:&nbsp;{numOfResults}
          </h3>
          <br />
        </div>

        <div className="cards-wrapper">
          {movies.map((movie) => (
            <div className="card-container" key={movie.id} onClick={() => moreInfo(movie.title)}>
              <div className="movie-info">
                <div className="movie-title">
                  <h3>
                    <strong>{movie.title}</strong>
                  </h3>
                </div>
                <div className="movie-release-date">
                  <strong>
                    release date:{" "}
                    <span className="date">{movie.release_date}</span>
                  </strong>
                </div>
              </div>
              <div className="movie-poster">
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + " poster"}
                  />
                ) : (
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                  <img src={image} alt="no-image" />
                )}
              </div>
              <div className="read-more">
                Read More...
              </div>
            </div>
          ))}
        </div>
        </>
}
      </div>

    </>
  );
}

export default SearchMovies;

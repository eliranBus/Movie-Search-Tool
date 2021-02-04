import { SHOW_MOVIE_DETAILS, MOVIE_DETAILS_FAIL } from '../constants/movieConstants';

export function setMovieResult(result) {
  return {
    type: SHOW_MOVIE_DETAILS,
    result,
  };
}

export function setMovieFailure(error) {
  return {
    type: MOVIE_DETAILS_FAIL,
    error,
  };
}

export const getMovieDetails = (title, dispatch) => {

  const url = `https://www.omdbapi.com/?apikey=e2220c2c&t=${title}`;
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(setMovieResult(data)))
      .catch((error) => dispatch(setMovieFailure(error)))
  }
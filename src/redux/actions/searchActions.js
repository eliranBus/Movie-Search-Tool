import {
  SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL,
} from '../constants/searchConstants';
import { API_KEY } from '../../config';

export function setSearchRequest(query) {
  return {
    type: SEARCH_REQUEST,
    query,
  };
}

export function setSearchResult(result, numOfResults) {
  return {
    type: SEARCH_SUCCESS,
    result,
    numOfResults
  };
}

export function setSearchFailure(error) {
  return {
    type: SEARCH_FAIL,
    error,
  };
}

// export const saveLocalStorageMovies = (data) => {
//   localStorage.setItem("movies", JSON.stringify(data));
// } 

export const searchMovies = (e, query, dispatch) => {
  e.preventDefault();

  dispatch(setSearchRequest(query));

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  setTimeout(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // saveLocalStorageMovies(data.result)
      dispatch(setSearchResult(data.results, data.total_results))
    })
    .catch((error) => {dispatch(setSearchFailure(error))})
  }, 1500)

};
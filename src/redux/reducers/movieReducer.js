import { SHOW_MOVIE_DETAILS, MOVIE_DETAILS_FAIL } from '../constants/movieConstants';

const initialState = {
  specificMovie: {},
  error: null,
};

export default function movieReducer( state = initialState, action) {
  switch (action.type) {

    case SHOW_MOVIE_DETAILS:
      return { ...state, specificMovie: action.result };
    case MOVIE_DETAILS_FAIL:
      return { ...state, error: action.error };

    default:
      return state;
  }
}
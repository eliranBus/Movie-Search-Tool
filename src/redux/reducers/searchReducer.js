import {SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL} from '../constants/searchConstants';

export default function searchReducer(state = { loading: false, query: '', movies: [], numOfResults: '' }, action) {
  switch (action.type) {

    case SEARCH_REQUEST:
      return { ...state, loading: true, query: action.query };
    case SEARCH_SUCCESS:
      return { ...state, loading: false, movies: action.result, numOfResults: action.numOfResults };
    case SEARCH_FAIL:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
}
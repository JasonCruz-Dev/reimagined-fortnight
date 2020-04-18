import {
  FETCH_SPACEXAPI_START,
  FETCH_SPACEXAPI_SUCCESS,
  FETCH_SPACEXAPI_FAIL,
} from "../actions/Actions";

const initialState = {
  id: [],
  error: "",
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPACEXAPI_START:
      return {
        ...state,
        isFetching: true,
        id: [],
      };
    case FETCH_SPACEXAPI_SUCCESS:
      return {
        ...state,
        id: action.payload,
        isFetching: false,
      };
    case FETCH_SPACEXAPI_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

import axios from "axios";

export const FETCH_SPACEXAPI_START = "FETCH_SPACEXAPI_START";
export const FETCH_SPACEXAPI_SUCCESS = "FETCH_SPACEXAPI_SUCCESS";
export const FETCH_SPACEXAPI_FAIL = "FETCH_SPACEXAPI_FAIL";

export function getApi() {
  return function (dispatch) {
    dispatch({ type: FETCH_SPACEXAPI_START });

    setTimeout(() => {
      axios
        .get("https://api.spacexdata.com/v3/dragons")
        .then((response) => {
          console.log("API INFO HERE:", response.data);
          dispatch({ type: FETCH_SPACEXAPI_SUCCESS, payload: response.data });
        })
        .catch((error) => {
          console.log("There was an error: ", error);
          dispatch({ type: FETCH_SPACEXAPI_FAIL, payload: "Noooo, go back", error });
        });
    }, 13000);
  };
}

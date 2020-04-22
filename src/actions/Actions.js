import axios from "axios";

// Here you have to have a Start, Success, and Fail. Doesnt have to be with those names, but there has to be a start, middle, and ending.. Keep track of your naming conventions.
export const FETCH_SPACEXAPI_START = "FETCH_SPACEXAPI_START";
export const FETCH_SPACEXAPI_SUCCESS = "FETCH_SPACEXAPI_SUCCESS";
export const FETCH_SPACEXAPI_FAIL = "FETCH_SPACEXAPI_FAIL";

export function getApi() {
  return function (dispatch) {
    dispatch({ type: FETCH_SPACEXAPI_START }); // START goes here

    // Set a timeout here, but dont forget to add the timer at the bottom
    setTimeout(() => {
      axios
        .get("https://api.spacexdata.com/v3/dragons") // <--- Here you have to use the correct API, if there are more endpoints, you will need to create an axios per each endpoint
        .then((response) => {
          console.log("API INFO HERE:", response.data); // "data" comes from the API array, find your naming convention as per your API. Every API is different.
          dispatch({ type: FETCH_SPACEXAPI_SUCCESS, payload: response.data }); // Make sure to add the SUCCESS. And when adding to the payload, you need to add the "payload: respose.(whichever endpoint you will use)"
        })
        .catch((error) => {
          console.log("There was an error: ", error);
          dispatch({ type: FETCH_SPACEXAPI_FAIL, payload: "Noooo, go back", error }); // FAIL goes here, always. Same for the payload.
        });
    }, 2000); // remove the " [ ] " for the array, and add a timer here. 1000 per 1 sec.
  };
}

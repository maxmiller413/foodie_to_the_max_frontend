export const API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";

// FIX ME: Remove this token
// NOTE: as long as this token is saved in the frontend, the application is not production ready.
// The beaerer token must be used on a erver whose inner workings are not exposed to the outside world
// For simplicity and the sake of this tutorial, I'll just leave it here like this
// But just bear in mind: NEVER EVER save a bearer token inside the frontend code

export const BEARER_TOKEN = process.env.REACT_APP_YELP_API_KEY;
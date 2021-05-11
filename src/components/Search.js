import React, { useState } from "react"
import {API_BASE_URL, BEARER_TOKEN} from '../hooks/yelp-api/config.js'

function Search({ setPlaces }){

    const [term, setTerm] = useState([])
    const [location, setLocation] = useState([])

    function onhandleSubmit(e){
        e.preventDefault()

        // const termSearch = {
        //     term,
        //     location
        // }
// console.log(termSearch)

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${BEARER_TOKEN}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

// **** REFACTOR @ END - Think can delete axios, prop-types, query-string, react-axios, yelp-api, proxy: localhost/3000 ****

// CORS-Anywhere workaround
        
        fetch(`${API_BASE_URL}/businesses/search?term=${term}&location=${location}&limit=50`, requestOptions)
        .then(response => response.json())
        .then(placesArr => setPlaces(placesArr.businesses))
        // .catch(error => console.log('error', error));
    }

    return(
        <div className="columns is-centered">
            
            <form onSubmit={onhandleSubmit}>
                <label> Term </label>
                <input 
                type="text"
                id="term"
                name="restaurant"
                placeholder="Search by cuisine!"
                value={term}
                onChange={e => setTerm(e.target.value)}
                />

            <label> Location </label>
                <input 
                type="text"
                id="location"
                name="location"
                placeholder="Search by address or city!"
                value={location}
                onChange={e => setLocation(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search
























// *****YELP FUSION API FETCH ATTEMPS*****
// let yelpAPI = require('yelp-api');

        // // Create a new yelpAPI object with your API key
        // let apiKey = BEARER_TOKEN;
        // let yelp = new yelpAPI(apiKey);

        // // Set any parameters, if applicable (see API documentation for allowed params)
        // let params = [{ location: location, term: term }];

        // // Call the endpoint
        // yelp.query('businesses/search', params)
        // .then(data => {
        // // Success
        // console.log(data);
        // })
        // .catch(err => {
        // // Failure
        // console.log(err);
        // });
        
        // fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`)

        
        // const axios = require("axios")

        // let API_KEY = process.env.REACT_APP_YELP_API_KEY

        // // REST
        // let yelpREST = axios.create({
        // baseURL: "https://api.yelp.com/v3/",
        // headers: {
        //     Authorization: `Bearer ${API_KEY}`,
        //     "Content-type": "application/json",
        // },
        // })

        // yelpREST("/businesses/search", { 
        //     params: { 
        //         location: {location},
        //         restaurant: {restaurant},
        //     }, 
        // }).then(({ data }) => {

        // console.log(data)

        // })

        // axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, {
        // headers: {
        //     Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
        // },
        // params: {
        // categories: 'breakfast_brunch',
        // }
        // })
        // .then((res) => {
        // console.log(res)
        // })
        // .catch((err) => {
        // console.log ('error')
        // })
        //  .then((res) => {
        //   console.log(res)
        //  })
        //  .catch((err) => {
        //   console.log ('error')
        //  })

        // fetch(`${API_BASE_URL}businesses/search?location=${location}&term=${term}`, {
        //     headers: {
        //         Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
        //         Origin: 'localhost'
        //         ,
        //         withCredentials: true,
        //     }
        //     .then(r => r.json())
        //     .then(data => console.log(data))
        // })

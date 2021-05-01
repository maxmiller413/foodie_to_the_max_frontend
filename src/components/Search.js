import React, { useState } from "react"

function Search(){

    const [restaurant, setRestaurant] = useState([])
    const [location, setLocation] = useState([])

    function onhandleSubmit(e){
        e.preventDefault()
        const restaurantSearch = {
            restaurant,
            location
        }
        console.log(restaurantSearch)
    }

    return(
        <div>
            <h1> Search </h1>
            <form onSubmit={onhandleSubmit}>
                <label> Restaurant </label>
                <input 
                type="text"
                id="restaurant"
                name="restaurant"
                placeholder="Search by cuisine!"
                value={restaurant}
                onChange={e => setRestaurant(e.target.value)}
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

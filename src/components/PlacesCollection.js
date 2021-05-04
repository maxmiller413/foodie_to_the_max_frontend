import React from "react"
import PlaceCard from "./PlaceCard"
import './PlacesCollection.module.css';


function PlacesCollection({ places, currentUser, addNewWishlist }){
    console.log(places)
    const placesArr = places.map(place => (
        <PlaceCard 
            key={place.id}
            place={place}
            currentUser={currentUser}
            addNewWishlist={addNewWishlist}
        />
    ))
    return(
        <div>
            <div className="columns">
                <div className="column"> </div>
                <div className="search-results"> 
                    {/* <p className="notification">Search Results:</p> */}
                    <ul className="notification">
                        {placesArr}
                    </ul>
                </div>

                <div className="column"> </div>

            </div>

            {/* <h1> PlacesCollection </h1>
            <ul>
                {placesArr}
            </ul> */}
        </div>
        
    )
}

export default PlacesCollection
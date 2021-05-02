import React from "react"
import PlaceCard from "./PlaceCard"

function PlacesCollection({ places }){
    console.log(places)
    const placesArr = places.map(place => (
        <PlaceCard 
            key={place.id}
            place={place}
        />
    ))
    return(
        <div>
            <h1> PlacesCollection </h1>
            <ul>
                {placesArr}
            </ul>
        </div>
        
    )
}

export default PlacesCollection
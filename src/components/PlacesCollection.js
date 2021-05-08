import React from "react"
import PlaceCard from "./PlaceCard"
import './PlacesCollection.module.css';

function PlacesCollection({ places, currentUser, addNewWishlist, addNewWishlistPlace, onSetPlaceId }){
    console.log(places)
    const placesArr = places.map(place => (
        <PlaceCard 
            key={place.id}
            place={place}
            currentUser={currentUser}
            addNewWishlist={addNewWishlist}
            addNewWishlistPlace={addNewWishlistPlace}
            onSetPlaceId={onSetPlaceId}
        />
    ))
    return(      
        <div>
            {placesArr} 
        </div>
        
        
    )
}

export default PlacesCollection
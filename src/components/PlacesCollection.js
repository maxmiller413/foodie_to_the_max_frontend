import React from "react"
import PlaceCard from "./PlaceCard"
import styles from './PlacesCollection.module.css';

function PlacesCollection({ places, currentUser, addNewWishlistPlace, onSetPlaceId }){
    console.log(places)
    const placesArr = places.map(place => (
        <PlaceCard 
            key={place.id}
            place={place}
            currentUser={currentUser}
            
            addNewWishlistPlace={addNewWishlistPlace}
            onSetPlaceId={onSetPlaceId}
        />
    ))
    return(      
        <div className={styles['search-results']}>
            {placesArr} 
        </div>
        
        
    )
}

export default PlacesCollection
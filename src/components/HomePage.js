import React, { useState } from "react"

import Filter from "./Filter"
import PlacesCollection from "./PlacesCollection"
import styles from "./HomePage.module.css"

function HomePage({currentUser, addNewWishlistPlace, onSetPlaceId, places, showRes, setShowRes, sortBy, setSortBy, rating, setRating, review, setReview, wishlists, placeId}){

    // *** old code -- set places in state? *** 
    // const [places, setPlaces] = useState([])

    return(

    <div>
        <div className={`${styles['filter-wrapper']}`}>
            
            <Filter 
                showRes={showRes}
                setShowRes={setShowRes}
                sortBy={sortBy}
                setSortBy={setSortBy}
                rating={rating}
                setRating={setRating}
                review={review}
                setReview={setReview}
                
            />
        </div>
            
        <div>
            <PlacesCollection 
                places={places} 
                currentUser={currentUser} 
                wishlists={wishlists}
                placeId={placeId}
                addNewWishlistPlace={addNewWishlistPlace}
                onSetPlaceId={onSetPlaceId}
            />
        </div>

    </div>

    )
}

export default HomePage
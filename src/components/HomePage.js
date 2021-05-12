import React, { useState } from "react"
// import React from "react"
// import Search from "./Search"
import Filter from "./Filter"
import PlacesCollection from "./PlacesCollection"

function HomePage({currentUser, addNewWishlist, addNewWishlistPlace, onSetPlaceId, places, showRes, setShowRes, sortBy, setSortBy, rating, setRating, review, setReview}){

    // const [places, setPlaces] = useState([])

    return(

    <div>
        <div>
            <h1 className='subtitle'> <strong> burgers </strong> berlin </h1>
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
                
                addNewWishlist={addNewWishlist}
                addNewWishlistPlace={addNewWishlistPlace}
                onSetPlaceId={onSetPlaceId}
            />
        </div>

    </div>

    )
}

export default HomePage
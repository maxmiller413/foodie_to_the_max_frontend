import React, { useState } from "react"
import Search from "./Search"
import Filter from "./Filter"
import PlacesCollection from "./PlacesCollection"

function HomePage({currentUser, addNewWishlist, addNewWishlistPlace, onSetPlaceId}){

    const [places, setPlaces] = useState([])

    return(
        <section className="section">
            <div className="tile is-ancestor">
                <div className="title is-vertical is-8">
                    <header>
                        <Search setPlaces={setPlaces} className="tile is-parent"/>
                    </header>
                    <div>
                        <PlacesCollection 
                            places={places} 
                            currentUser={currentUser} 
                            className="tile is-parent"
                            addNewWishlist={addNewWishlist}
                            addNewWishlistPlace={addNewWishlistPlace}
                            onSetPlaceId={onSetPlaceId}
                        />
                    </div>
                    <div>
                        <Filter className="tile is-parent"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage
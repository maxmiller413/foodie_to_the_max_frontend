import React, { useState } from "react"
import Search from "./Search"
import Filter from "./Filter"
import PlacesCollection from "./PlacesCollection"

function HomePage({currentUser, addNewWishlist, addNewWishlistPlace, onSetPlaceId}){

    const [places, setPlaces] = useState([])

    return(
        <>
        <section className="section notification">
            <div className="container notification is-success">
                <div className="columns notification is-info">
                    <div className="column notification">
                        <header className="column notification is-danger">
                            <Search setPlaces={setPlaces} />
                        </header>
                    </div>
                    
                    
                </div>
                <div className="columns notification">
                    <div className="column notification is-danger is-2">
                        <Filter />
                    </div>
                    <div className="column notification is-success">
                        <PlacesCollection 
                            places={places} 
                            currentUser={currentUser} 
                            
                            addNewWishlist={addNewWishlist}
                            addNewWishlistPlace={addNewWishlistPlace}
                            onSetPlaceId={onSetPlaceId}
                        />
                    </div>
                </div>
            </div>
        </section>

        </>
        
        
        
    )
}

export default HomePage
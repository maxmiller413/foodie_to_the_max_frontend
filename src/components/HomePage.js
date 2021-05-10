import React, { useState } from "react"
import Search from "./Search"
import Filter from "./Filter"
import PlacesCollection from "./PlacesCollection"

function HomePage({currentUser, addNewWishlist, addNewWishlistPlace, onSetPlaceId}){

    const [places, setPlaces] = useState([])

    return(
        
        // <section className="section notification">
            <div className="container notification is-success">

                <div className="columns notification is-info">
                        <header className="column notification is-danger">
                            <Search setPlaces={setPlaces} />
                        </header>
                </div>
            
                <div className="columns notification"> 
                    <div className="column">
                        
                        <div className="columns">   
                            <header className="column notification is-danger">
                                <Filter />
                            </header>
                            
                        </div>

                        <div className="columns"> 
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
                </div>

            </div>
        // </section>
        
    )
}

export default HomePage
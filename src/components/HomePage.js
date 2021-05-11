import React, { useState } from "react"
// import React from "react"
// import Search from "./Search"
import Filter from "./Filter"
import PlacesCollection from "./PlacesCollection"


function HomePage({currentUser, addNewWishlist, addNewWishlistPlace, onSetPlaceId, places, showRes, setShowRes, sortBy, setSortBy, rating, setRating}){

    // const [places, setPlaces] = useState([])

    return(
        
        // <section className="section notification">
        <div>
            {/* <div className="container notification is-success"> */}

                {/* <div className="columns notification is-info">
                        <header className="column notification is-danger">
                            <Search setPlaces={setPlaces} />
                        </header>
                </div> */}
        

        <section className="section">
        <div className="container">
        {/* <div className="hero is-fullheight has-background ">
                  <img src={hero} className="hero-body">

                    </img> */}
                  {/* <Search setPlaces={setPlaces} /> */}
        
            
        </div>
        </section>


            <div>
                <div>
                {/* <div className="columns notification"> 
                    <div className="column"> */}
                        
                        <div >   
                            <header >
                                <Filter 
                                    showRes={showRes}
                                    setShowRes={setShowRes}
                                    sortBy={sortBy}
                                    setSortBy={setSortBy}
                                    rating={rating}
                                    setRating={setRating}
                                />
                            </header>
                            
                        </div>

                        <div > 
                            <div >
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
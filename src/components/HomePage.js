import React, { useState } from "react"
import Search from "./Search"
import Filter from "./Filter"
import PlacesCollection from "./PlacesCollection"

function HomePage(){

    const [places, setPlaces] = useState([])

    return(
        <div>
            <header>
                <Search setPlaces={setPlaces}/>
            </header>
            <div>
                <PlacesCollection places={places}/>
            </div>
            <div>
                <Filter />
            </div>
        </div>
    )
}

export default HomePage
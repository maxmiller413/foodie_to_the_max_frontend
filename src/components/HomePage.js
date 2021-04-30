import React from "react"
import Search from "./Search"
import Filter from "./Filter"
import PlacesCollection from "./PlacesCollection"

function HomePage(){
    return(
        <div>
            <header>
                <Search />
            </header>
            <div>
                <PlacesCollection />
            </div>
            <div>
                <Filter />
            </div>
        </div>
    )
}

export default HomePage
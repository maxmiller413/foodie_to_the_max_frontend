import React from "react"

function PlaceCard({ place }){
    console.log(place.categories)

const {id, name, image_url, categories} = place
console.log(categories)

const placeCategoriesArr = categories.map(category => (
    <li> {category.title} </li>
    
))
    return(
        <div>
            <h1> {name} </h1>
            <button>
                Add to Wishlist!
            </button>
            <img src={image_url} /> 
            <p>Categories:</p>
            <ul> 
                {placeCategoriesArr}
            </ul>
        </div>
        
    )
}

export default PlaceCard
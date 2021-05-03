import React from "react"

function PlaceCard({ place }){
    console.log(place.categories)

const {id, name, image_url, categories, display_phone, location, price, rating, review_count, url} = place

console.log(place)

const placeCategoriesArr = place.categories.map((category, index) => (
    <li key={index}> 
        {category.title} 
    </li>
    
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
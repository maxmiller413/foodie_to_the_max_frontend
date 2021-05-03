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
        <div className="card">
            <header className="card-header"> 
                <p className="card-header-title"> {name} </p>
            </header>
                
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={image_url} alt={name}/>
                </figure>
            </div> 

            <div class="card-content">
                <div class="content">
                    <p>Categories:</p>
                    <ul> 
                        {placeCategoriesArr}
                    </ul>
                </div>
                <div class="content">
                    <p>Categories:</p>
                    <ul> 
                        {placeCategoriesArr}
                    </ul>
                </div>
            </div>
            

            <button id={id}>
                Add to Wishlist!
            </button>
            
        </div>
        
    )
}

export default PlaceCard
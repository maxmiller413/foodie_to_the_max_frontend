import React from "react"
import { useHistory } from "react-router-dom";

function PlaceCard({ place, currentUser, onSetPlaceId }){
    console.log(place)

    const {id, name, image_url, categories, display_phone, location, price, rating, review_count, url, state} = place

    const history = useHistory();

    const placeCategoriesArr = place.categories.map((category, index) => (
        <li key={index}> 
            {category.title} 
        </li>
    ))
    
    function handleOnClick(){
        const newPlace = {
            name: name,
            phone: display_phone,
            street_address: location.address1,
            city: location.city,
            state: location.state,
            zip: location.zip_code,
            image_url: image_url,
            url: url,
            rating: rating,
            review_count: review_count,
            categories: categories,
            price: price
        }
        fetch("http://localhost:3000/places",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlace)
            })
            .then(r => r.json())
            .then(newPlace => {
                onSetPlaceId(newPlace)
                history.push('/wishlist_place/new')
            })


        
              
    }
    // const handleAddWishlistPlace = (id) => {
        // history.push('/wishlist')
        
        // const wishlistObject = {
        //     user_id: currentUser.id,
        //     title: "test 1"
        //     //   `${currentUser.username} ${name}`
        // }

        // console.log(wishlistObject)

        // fetch("http://localhost:3000/wishlists",{
        // method: "POST",
        // headers: {
        //     "Content-Type": "application/json"
        // },
        // body: JSON.stringify(wishlistObject)
        // })
        // .then(r => r.json())
        // .then(newWishlist => addNewWishlist(newWishlist))
        //   history.push('/wishlist')


        // const wishlistPlaceObject = {
        //     place_id: id,
        //     wishlist_id: id
        // }

        // console.log(wishlistPlaceObject)

        // fetch("http://localhost:3000/wishlist_places", {
        // method: "POST",
        // headers: {
        //     "Content-Type": "application/json"
        // },
        // body: JSON.stringify(wishlistPlaceObject)
        // .then(r => r.json())
        // .then(newWishlistPlace => addNewWishlistPlace(newWishlistPlace))
        // })

    // }
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

            <div className="card-content">
                <div className="content">
                    <p>Categories:</p>
                    <ul> 
                        {placeCategoriesArr}
                    </ul>
                </div>
                {/* <div className="content">
                    <p>Categories:</p>
                    <ul> 
                        {placeCategoriesArr}
                    </ul>
                </div> */}
            </div>
            

            <button id={id} onClick={handleOnClick}>
                Add to Wishlist!
            </button>

            
            
        </div>
        
    )
}

export default PlaceCard
import React from "react"

function PlaceCard({ place, currentUser, addNewWishlist, addNewWishlistPlace }){
    console.log(place.categories)

    const {id, name, image_url, categories, display_phone, location, price, rating, review_count, url} = place

    console.log(place)

    const placeCategoriesArr = place.categories.map((category, index) => (
        <li key={index}> 
            {category.title} 
        </li>
    ))

    const handleAddWishlistPlace = (id) => {
        // history.push('/wishlist')
        
        const wishlistObject = {
            user_id: currentUser.id,
            title: "test 1"
            //   `${currentUser.username} ${name}`
        }

        console.log(wishlistObject)

        fetch("http://localhost:3000/wishlists",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(wishlistObject)
        })
        .then(r => r.json())
        .then(newWishlist => addNewWishlist(newWishlist))
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

    }
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
            

            <button id={id} onClick={(e) => handleAddWishlistPlace(e.target.id)}>
                Add to Wishlist!
            </button>

            
            
        </div>
        
    )
}

export default PlaceCard
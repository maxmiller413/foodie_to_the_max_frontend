import React from "react"
import { Link } from "react-router-dom";
import WishlistPlaceCard from "./WishlistPlaceCard"

function WishlistCard({ wishlist }){
    
    console.log(wishlist.title)
    console.log(wishlist)
    const { title, user_id } = wishlist
    
    // const wishlistPlacesArr = wishlist.map(wishlistPlace => (
    //     <WishlistPlaceCard
    //         key={wishlistPlace.id}
    //         wishlistPlace={wishlistPlace}
    //     />
    // ))
    const wishlistId = `wishlists/${wishlist.id}`
    return(
        <div className="card">
            <header className="card-header"> 
                <p className="card-header-title"> 
                    <Link to="{wishlists/${wishlist.id}}" > {wishlist.title} </Link>
                </p>
            </header>
        </div>

    )
}

export default WishlistCard
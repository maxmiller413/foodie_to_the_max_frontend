import React from "react"
import WishlistCard from "./WishlistCard"
// import './WishlistsCollection.module.css';

function WishlistsCollection({ wishlists }){
    const wishlistsArr = wishlists.map(wishlist => (
        <WishlistCard 
            key={wishlist.id}
            wishlist={wishlist}
            // currentUser={currentUser}
            // addNewWishlist={addNewWishlist}
        />
    ))
    return(
        <div>
            <div className="columns">
                <div className="column"> </div>
                <div className="search-results"> 
                    <p className="notification">Wishlists:</p>
                    <ul className="notification">
                        {wishlistsArr}
                    </ul>
                </div>

                <div className="column"> </div>

            </div>

            {/* <h1> wishlistsCollection </h1>
            <ul>
                {wishlistsArr}
            </ul> */}
        </div>
        
    )
}

export default WishlistsCollection
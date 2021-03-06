import React from "react"
import WishlistCard from "./WishlistDetails"
import styles from './WishlistsCollection.module.css';

function WishlistsCollection({ wishlists }){
    const wishlistsArr = wishlists.map(wishlist => (
        <WishlistCard 
            key={wishlist.id}
            wishlist={wishlist}
            // currentUser={currentUser}
            // addNewWishlist={addNewWishlist}
        />

    ))

    console.log(wishlists)

    return(
        <section className={`section ${styles['search-results']}`}>
            <div className="container">
                <div className="columns">
                    <div className="column"></div>
                    <div className="column card"> 
                    <div className="search-results"> 
                        <header className="notification is-success title has-text-centered">Wishlists</header>
                        <ul className="notification">
                            {wishlistsArr}
                        </ul>
                    </div>
                </div>
                <div className="column"></div>

                

            </div>
            
            {/* <h1> wishlistsCollection </h1>
            <ul>
                {wishlistsArr}
            </ul> */}
            </div>
            
        </section>
        
    )
}

export default WishlistsCollection
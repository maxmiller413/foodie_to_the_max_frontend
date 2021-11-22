import React from "react"
import { Link } from "react-router-dom";
// ???
import WishlistPlaceCard from "./WishlistPlaceCard"

function WishlistDetails({ wishlist }){
    
    console.log(wishlist)
    // ???
    // const { title, id } = wishlist
    // console.log(id)
    // const wishlistPlacesArr = wishlist.map(wishlistPlace => (
    //     <WishlistPlaceCard
    //         key={wishlistPlace.id}
    //         wishlistPlace={wishlistPlace}
    //     />
    // ))
    // const wishlistId = `/wishlists/${wishlist.id}`

    // console.log(wishlist.id)

    function handleClick(){

    }
    
    return(
        <div className="card">
            <header className="card-header"></header>
            <p className="card-header-title"> 
                
                <Link to={`/wishlists/${wishlist.id}`} > {wishlist.title} </Link> 
                {/* <button id={wishlist.id} onClick={handleClick}>
                    See "{wishlist.title}" spots
                </button> */}

            </p>
            
        </div>

    )
}

export default WishlistDetails
import React from "react"

function WishlistCard({ wishlist }){
    console.log(wishlist)
    const { title, user_id } = wishlist
    return(
        <div className="card">
            <header className="card-header"> 
                <p className="card-header-title"> {title} </p>
            </header>
        </div>

    )
}

export default WishlistCard
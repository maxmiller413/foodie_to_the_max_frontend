
import { useParams } from "react-router-dom"
import React, {useEffect } from "react"

function WishlistCard({ wishlistPlaces, currentUser, setWishlistPlaces }){
     
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/wishlists/${params.id}`)
            .then(r => r.json())
            .then(data => setWishlistPlaces(data.places))
    }, [params.id])

    console.log(wishlistPlaces)

    const wishlistPlacesArr = wishlistPlaces.map(place => (
        <li key={place.id}>  {place.name} </li>
    ))
     return(
         <section className="section">
             <div className="container">
                <header> Wishlist Places </header>
                <ul>
                    {wishlistPlacesArr}
                </ul>
            </div>
         </section>
        
       

    )
}

export default WishlistCard
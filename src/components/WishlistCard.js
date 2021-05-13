
import { useParams } from "react-router-dom"
import React, {useEffect } from "react"
import styles from './WishlistCard.module.css';

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
         <section className={`section ${styles['search-result']}`}>
             <div className="container">
                <div className="columns">
                    <div className="column"></div>
                    <div className="column card">
                        <div className="search-results">
                            <header className="notification is-success title has-text-centered"> Wishlist Places </header>
                            <ol className="notification">
                                {wishlistPlacesArr}
                            </ol>
                        </div>
                    </div>
                    <div className="column"></div>
                </div>
            </div>
        </section>

         
        
       

    )
}

export default WishlistCard

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
                <div className="columns is-centered">
                    <div className="column is-half is-offset-one-quarter card">
                    
                    {/* <div class="card-image">
                        <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        </figure>
                    </div> */}
                        
                        <header className="title"> Wishlist Places </header>
                        <ol className="column">
                            {wishlistPlacesArr}
                        </ol>
                    
                    </div>
                </div>
            </div>
        </section>

         
        
       

    )
}

export default WishlistCard
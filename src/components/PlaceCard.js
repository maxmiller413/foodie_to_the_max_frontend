import React from "react"
import { useHistory } from "react-router-dom";

function PlaceCard({ place, currentUser, onSetPlaceId }){
    console.log(place)

    const {id, name, image_url, categories, display_phone, location, price, rating, review_count, url, state, is_closed} = place

    const history = useHistory();

    const placeCategoriesArr = place.categories.map((category, index) => (
        <li key={index}> 
            {category.title} 
        </li>
    ))

    const placeTransactionOptions = place.transactions.map((transaction, index) => (
        <span key={index} className="tag"> 
            {transaction}
        </span>
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
        <div className="card block notification">
            <header className="card-header columns title is-vcentered"> 
                <p className="card-header-title column-gap is-centered"> 
                    {name} 
                </p>
                <button id={id} onClick={handleOnClick} className=" button is-small is-rounded is-success column-gap has-text-weight-bold">
                    Add to Wishlist!
                </button>
                <div className="column is-narrow"></div>
            </header>
            
            <div className="columns">
                <div className="column is-6 card-image">
                    <figure className="image ">
                        <img src={image_url} alt={name}/>
                    </figure>
                </div> 

                <div className="column card-content is-centered">
                    <div className="content">

                        <p> Rating: </p>
                        <span className="icon">
                            {/* <i 
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                initialRating={rating} 
                                readonly
                                
                            >
                            </i> */}
                            
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                        </span>
                        
                        
                        <div className="tags">
                            <span className="tag"> {price} </span>
                            {placeTransactionOptions}
                        </div>


                        <p >Categories:</p>
                        <ul> 
                            {placeCategoriesArr}
                        </ul>
                        
                        <p> Review Count: {review_count} </p>
                        Restaurant Website: <a href={url}> {name}</a>
                        {/* <p> Open Now: ({is_closed} ? Closed : Open) </p> */}
                        <p>Open Now: {!is_closed ? ( "Closed" ) : ( "Open" )}</p>
                        <p> Price: {price} </p>
                        <ul>
                            {placeTransactionOptions}
                        </ul>
                    </div>
                </div>

                <div className="column card-content">
                    <div className="content">
                        <p className="subtitle">Address:</p>
                        <div>{location.address1}</div>
                        <div>{location.city}, {location.state} {location.zip_code}</div><br></br>

                        <p className="subtitle">Phone:</p>
                        <div>{display_phone}</div>
            
                    </div>
                </div>
            </div>
        </div>
    )
}
// const {id, name, image_url, categories, display_phone, location, price, rating, review_count, url, state} = place
export default PlaceCard
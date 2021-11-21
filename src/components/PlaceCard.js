import React, { useState } from "react"
import { useHistory } from "react-router-dom";
// *** ReactStars needed? ***
import ReactStars from "react-rating-stars-component"
import styles from './PlaceCard.module.css';
import RestaurantRating from './RestaurantRating'
import WishlistPlaceForm from "./WishlistPlaceForm"

function PlaceCard({ place, currentUser, onSetPlaceId, addNewWishlistPlace, wishlists, placeId }){
    console.log(place)

    const {id, name, image_url, categories, display_phone, location, price, rating, review_count, url, state, is_closed} = place

    const [wishlistPlaceModal, setWishlistPlaceModal] = useState(false)
// ???
    const history = useHistory();

    const placeCategoriesArr = place.categories.map((category, index) => (
        <span key={index} className={`tag ${styles['restaurant-tag']}`}> 
            {category.title} 
        </span>
    ))

    const placeTransactionOptions = place.transactions.map((transaction, index) => (
        <span key={index} className={`tag ${styles['restaurant-tag']}`}> 
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
                // history.push('/wishlist_place/new')
                setWishlistPlaceModal((wishlistPlaceModal) => !wishlistPlaceModal)
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

    function handleNewWishlistPlaceClick(){
        setWishlistPlaceModal((wishlistPlaceModal) => !wishlistPlaceModal)
    }
    return(
<>
{/* <div className="modal is-active">
  <div className="modal-background"></div>

  <div className="modal-card">

    <header className="modal-card-head">
      <p className="modal-card-title">Modal title</p>
      <button className="delete" aria-label="close"></button>
    </header>

    <section className="modal-card-body">
      
    </section>

    <footer className="modal-card-foot">
      <button className="button is-success">Save changes</button>
      <button className="button is-clipped">Cancel</button>
    </footer>

  </div>
</div> */}
<div className={`${styles['search-result']} `}>
    <img src={image_url} alt={name} className={`${styles['restaurant-image']}`}/>
    <div className={styles['restaurant-info']}>
        <h2 className="subtitle"> {name} </h2>
        <RestaurantRating place={place}/>
        <p>{price} {placeTransactionOptions}</p>
        <p>{placeCategoriesArr}</p>
    </div>
    <div className={styles['contact-info']}>
        <p> {display_phone} </p>
        <p> {location.address1} </p>
        <p> {location.city}, {location.state} {location.zip_code} </p>
        <button id={id} onClick={handleOnClick} className='button is-small is-rounded is-success has-text-weight-bold'>
            Add to Wishlist!
        </button>
    </div>
</div>

    {/* <div className={styles['search-result']}>
        <div className="card block notification">
            
            <header className="card-header columns title is-vcentered"> 
                <p className="card-header-title column-gap is-centered"> 
                    {name} 
                </p>
                <button id={id} onClick={handleOnClick} className=" button is-small is-rounded is-success column-gap has-text-weight-bold">
                    Add to Wishlist!
                </button>
                
                <div className="column is-narrow"></div>
            </header> */}
            
            {/* <div className="columns">
                <div className="column is-6 card-image">
                    <figure >
                        <img src={image_url} alt={name} className={styles['restaurant-image']}/>
                    </figure>
                </div>  */}

                {/* <div className="column card-content">
                    <div className="content">
                        <p> Rating: </p>
                        <div className="columns">
                            <ReactStars
                                count={5}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                                value={rating}
                                className="column"
                                edit={false}
                            />
                        </div>
                        
                        
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
                        {/* <p>Open Now: {!is_closed ? ( "Closed" ) : ( "Open" )}</p>
                        <p> Price: {price} </p>
                        <ul>
                            {placeTransactionOptions}
                        </ul>
                    </div>
                </div> } }

                {/* <div className="column card-content">
                    <div className="content">
                        
                        <div className="margin-right">{location.address1}</div>
                        <div>{location.city}, {location.state} {location.zip_code}</div><br></br>

                        <p className="subtitle">Phone:</p>
                        <div>{display_phone}</div>
            
                    </div> 
                </div> */}
            {/* </div>
        </div>
        </div> */}
        <div className={wishlistPlaceModal ? 'modal is-active' : 'modal'}>
        <div className="modal-background" onClick={handleNewWishlistPlaceClick} ></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">New Wishlist Place</p>
                <button className="delete" aria-label="close" onClick={handleNewWishlistPlaceClick} ></button>
            </header>

            <section className={`modal-card-body ${styles.modal}`}>
                <WishlistPlaceForm 
                    currentUser={currentUser} 
                    wishlists={wishlists}
                    placeId={placeId}
                    addNewWishlistPlace={addNewWishlistPlace}
                />
            </section>
            
            <footer className="modal-card-foot">
                {/* <button className="button is-success">Save changes</button> */}
                <button className="modal-close is-large" aria-label="close" onClick={handleNewWishlistPlaceClick} >Cancel</button>
            </footer>
        </div>
    </div>
    </>
    )
}
// const {id, name, image_url, categories, display_phone, location, price, rating, review_count, url, state} = place
export default PlaceCard
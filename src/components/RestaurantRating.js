import React from 'react'
import styles from './RestaurantRating.module.css';
import ReactStars from "react-rating-stars-component"

function RestaurantRating({place}){
    
    return(
        <div className={styles.rating}>
            <ReactStars
                count={5}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                value={place.rating}
                className="column"
                edit={false}
            />
            <p> {place.review_count} reviews </p>
        </div>
    )
}

export default RestaurantRating
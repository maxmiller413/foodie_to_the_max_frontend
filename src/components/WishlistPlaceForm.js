import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

function WishlistPlaceForm({wishlists, placeId, setPlaceId, addNewWishlistPlace }){
    
    const [wishlistTitle, setWishlistTitle] = useState("")
    const history = useHistory()
    
    // *** what is this?  form? ***
    // let obj = {
    //     array: []
    // };
    // for (var l=0;l<100;l++){
    //     wishlists[l] = l+1;
    // }
    // console.log("obj: ", obj);
    const wishlistTitlesArr = wishlists.map((wishlist) =>
        
        <option key={wishlist.id} value={wishlist.id}> {wishlist.title} </option>
        
    );

    const wishlistPlaceObj = {
        place_id: placeId.id,
        wishlist_id: wishlistTitle
        
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/wishlist_places', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(wishlistPlaceObj)
        })
            .then(r => r.json())
            .then(newWishlistPlace => {
                addNewWishlistPlace(newWishlistPlace)
                history.push(`/wishlists/${newWishlistPlace.wishlist.id}`)
            })
            
            console.log()
            
    }
    console.log()
    return(
        
        <div>
            <form onSubmit={handleSubmit}>
                {/* <h1 > Add a Wishlist Place </h1>

                <label > Choose a Place </label>
                <input
                type="text"
                placeholder="1"
                value={placeId}
                onChange={e => setPlaceId(e.target.value)}
                /> */}

                <label > Choose a Wishlist </label>
                <select value={wishlistTitle} onChange={e => setWishlistTitle(e.target.value)}>
                {/* <option value="All" > All </option>
                <option value="Downsizing" > Downsizing </option>
                <option value="Growing" > Growing </option>
                <option value="Luxury" > Luxury </option>
                <option value="Upgrading" > Upgrading </option> */}
                <option value="" >  </option>
                    {wishlistTitlesArr}
                </select>
    
            {/* {errors.map((error) => (
              <p key={error} style={{ color: "red" }}>
                {error}
              </p>
            ))} */}

            <input type="submit" value="Submit" />
          </form>
        </div>
    )
}


export default WishlistPlaceForm
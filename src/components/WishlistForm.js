import React, { useState } from "react"
import { useHistory } from "react-router-dom"


function WishlistForm({ currentUser, onAddWishlist }){

    const [titleFormInput, setTitleFormInput] = useState([])
    console.log(currentUser)
    const {id, username, wishlist} = currentUser
    const history = useHistory()

    function handleWishlistFormSubmit(e){
      e.preventDefault()
      const formObj = {
        title: titleFormInput,
        user_id: currentUser.id
      }
      console.log(formObj)
      fetch('http://localhost:3000/wishlists', {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(formObj)
      })
        .then (r => r.json())
        .then(newWishList => onAddWishlist(newWishList))
        history.push("/wishlists/")

    }

    return(
        <div>
          <form onSubmit={handleWishlistFormSubmit}>
            {/* <h1 > Add a Wishlist </h1> */}
            <label > Wishlist Name </label>
            <input
              type="text"
              value={titleFormInput}
              onChange={e => setTitleFormInput(e.target.value)}
            />
    
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

export default WishlistForm
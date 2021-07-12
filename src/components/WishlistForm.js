import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import styles from "./WishlistForm.module.css"


function WishlistForm({currentUser, onAddWishlist, handleNewWishlistClick }){

    const [titleFormInput, setTitleFormInput] = useState([])
    
    // const {id, username, wishlist} = currentUser
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
        handleNewWishlistClick()
        history.push("/")

    }

    return(
        <div className={`styles['login-div'] container`}>
          <form onSubmit={handleWishlistFormSubmit} value='' className={`field has-addons ${styles.login}`}>
            
          <p className='control'>
            <button className="button is-static is-medium"> Wishlist Name </button>
          </p>

          <p className="control">
            <input
              type="text"
              name="wishlistName"
              value={titleFormInput}
              onChange={e => setTitleFormInput(e.target.value)}
              className={`input is-medium ${styles['input-control']}`}
            />
          </p>

            {/* {errors.map((error) => (
              <p key={error} style={{ color: "red" }}>
                {error}
              </p>
            ))} */}

            <button className={`button is-medium ${styles['search-button']}`}>
              <span className="icon is-small">
              <i className="fas fa-plus" aria-hidden="true"></i>
              

              </span>
            </button>
          </form>
        </div>
    )

}

export default WishlistForm
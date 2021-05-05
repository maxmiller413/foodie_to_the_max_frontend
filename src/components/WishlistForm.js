import React, { useState } from "react"
import { useHistory } from "react-router-dom"

function WishlistForm(){

    const [formInput, setFormInput] = useState([])

    

    return(
        <div>
          <form >
            <h1 > Add a Wishlist </h1>
            <label > Wishlist Name </label>
            <input
              type="text"
              value={formInput}
              onChange={e => setFormInput(e.target.value)}
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
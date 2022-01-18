
// import logo from './logo.svg';
// import './App';
import React, { useState, useEffect } from "react"
// console.log(process.env.REACT_APP_YELP_API_KEY)
import { Switch, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import WishlistsCollection from "./components/WishlistsCollection"
import WishlistDetails from "./components/WishlistDetails"
import WishlistPlaceCard from "./components/WishlistPlaceCard"
// import SignUp from "./components/SignUp"
// import Login from "./components/Login"
import NavBar from "./components/NavBar"
import WishlistForm from "./components/WishlistForm"
import WishlistCard from "./components/WishlistCard"
// import WishlistPlaceForm from "./components/WishlistPlaceForm"
import { useHistory } from "react-router-dom"

import styles from "./App.module.css"

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [wishlists, setWishlists] = useState([])
  const [wishlistPlaces, setWishlistPlaces] = useState([])
  const [placeId, setPlaceId] = useState([])
  const [places, setPlaces] = useState([])
  const [showRes, setShowRes] = useState(true);
  const [sortBy, setSortBy] = useState("All");
  const [rating, setRating] = useState("All")
  const [review, setReview] = useState("All")

  
  
console.log(placeId)
  useEffect(() => {
    // const token = true
    const userId = localStorage.getItem("userId")
    if (userId) {
    fetch(`http://localhost:3000/me/${userId}`)
    .then(r => r.json())
    // response => setCurrentUser
    .then(user => setCurrentUser(user))
    }
  }, [])

  useEffect(() => {
    const userId = localStorage.getItem("userId")
    if (userId){
      fetch(`http://localhost:3000/users/${userId}`)
      .then((r) => r.json())
      .then((data) => setWishlists(data.wishlists))
    } 
  }, [])

  // useEffect(() => {
  //   const userId = localStorage.getItem("userId")
  //   if (userId){
  //     fetch(`http://localhost:3000/users/${userId}`)
  //     .then((r) => r.json())
  //     .then((data) => setWishlistPlaces(data.wishlists))
  //   } 
  // }, [])

  function handleToggleDarkMode(){
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  function handleNewWishlist(newWishlist){
    const updatedWishlistArr = [...wishlists, newWishlist]
    setWishlists(updatedWishlistArr)
    // history.push("/wishlists/")
    
  }

  function handleAddWishlistPlace(newWishlistPlace){
    const updatedWishlistPlaceArr = [...wishlistPlaces, newWishlistPlace]
    setWishlistPlaces(updatedWishlistPlaceArr)
  }

  function onHandlePlaceId(newPlace){
    setPlaceId(newPlace)
  }

  const resPlacesArr = places
    .filter((place) => {
       return (sortBy === "All" || place.price === sortBy)
  })
    .filter((place) => {
      return (place.is_closed !== showRes)
  })
   .filter((place) => {
    return (rating === "All" || place.rating >= rating)
  })
  
   
  //   .filter(car => {
  //     return type === "All" || car.vehicle_type === type
  // })
    // .filter((place) => place.open_now !== showRes)
  .sort((place1, place2) => {
    if (sortBy === "review_count") {
      return place1.review_count - place2.review_count;
    } else {
      return place1.name.localeCompare(place2.name);
    }
  })
  

  return (
    // <div style={{ width: "100%", height: "100%" }}>
    //   <div className={styles.Hero}>
    <div >
      <div>
      
        <NavBar 
          title="foodie_to_the_max"
          isDarkMode={isDarkMode}
          onToggleDarkMode={handleToggleDarkMode}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setPlaces={setPlaces}
          onAddWishlist={handleNewWishlist}
          // setWishlists={setWishlists}
        />
      
    {/* <section className="section hero is-danger is-fullheight" > */}
     
        {/* <div className="container"> */}
       

        
        <Switch>
          {/* <Route exact path="/signup">
            <SignUp setCurrentUser={setCurrentUser} />
          </Route> */}

          {/* <Route exact path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route> */}

          {/* <Route exact path="/wishlist/new">
            <WishlistForm currentUser={currentUser} onAddWishlist={handleNewWishlist}/>
          </Route> */}

          {/* <Route exact path="/wishlist_place/new">
            <WishlistPlaceForm currentUser={currentUser} wishlists={wishlists} placeId={placeId} handleAddWishlistPlace={handleAddWishlistPlace} />
          </Route> */}

          <Route exact path="/wishlist_places/:id/places">
            <WishlistPlaceCard/>
          </Route>

          <Route exact path="/wishlists/:id" >
            <WishlistCard wishlistPlaces={wishlistPlaces} setWishlistPlaces={setWishlistPlaces}/>
          </Route>

          <Route exact path="/wishlists">
            <WishlistsCollection wishlists={wishlists} currentUser={currentUser}/>
          </Route>

          <Route exact path="/">
            {currentUser ? (
              <> 
                {/* <h1 className="subtitle"> Welcome, {currentUser.username} </h1> */}
                <HomePage 
                  currentUser={currentUser} 
                  // addNewWishlist={handleNewWishlist}
                  addNewWishlistPlace={handleAddWishlistPlace}
                  onSetPlaceId={onHandlePlaceId}
                  places={resPlacesArr}
                  // setPlaces={setPlaces}
                  showRes={showRes}
                  setShowRes={setShowRes}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  rating={rating}
                  setRating={setRating}
                  review={review}
                  setReview={setReview}
                  wishlists={wishlists}
                  placeId={placeId}
                /> 
              </>
              ) : (
              <>
              
              </>
              
            )}
          </Route>
          <Route path ="*">
            <h1> 404 not found </h1>
          </Route>
        </Switch>
      
      </div>
    {/* </section> */}
    </div>
  )
}

export default App;
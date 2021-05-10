// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"
// console.log(process.env.REACT_APP_YELP_API_KEY)
import { Switch, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import WishlistsCollection from "./components/WishlistsCollection"
import WishlistDetails from "./components/WishlistDetails"
import WishlistPlaceCard from "./components/WishlistPlaceCard"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import WishlistForm from "./components/WishlistForm"
import WishlistCard from "./components/WishlistCard"
import WishlistPlaceForm from "./components/WishlistPlaceForm"
import { useHistory } from "react-router-dom"

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [wishlists, setWishlists] = useState([])
  const [wishlistPlaces, setWishlistPlaces] = useState([])
  const [placeId, setPlaceId] = useState([])
  
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
  return (
    <div className={isDarkMode ? "App" : "App-light"} >
      <NavBar 
        title="foodie_to_the_max"
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        // setWishlists={setWishlists}
      />
      <Switch>
        <Route exact path="/signup">
          <SignUp setCurrentUser={setCurrentUser} />
        </Route>

        <Route exact path="/login">
          <Login setCurrentUser={setCurrentUser} />
        </Route>

        <Route exact path="/wishlist/new">
          <WishlistForm currentUser={currentUser} onAddWishlist={handleNewWishlist}/>
        </Route>

        <Route exact path="/wishlist_place/new">
          <WishlistPlaceForm currentUser={currentUser} wishlists={wishlists} placeId={placeId} handleAddWishlistPlace={handleAddWishlistPlace} />
        </Route>

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
              <h1 className="subtitle"> Welcome, {currentUser.username} </h1>
              <HomePage 
                currentUser={currentUser} 
                addNewWishlist={handleNewWishlist}
                addNewWishlistPlace={handleAddWishlistPlace}
                onSetPlaceId={onHandlePlaceId}
              /> 
            </>
            ) : (
              <h1 className="subtitle"> Please Login or SignUp </h1>
          )}
        </Route>
        <Route path ="*">
          <h1> 404 not found </h1>
        </Route>
      </Switch>
    </div>
  )
}

export default App;






    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
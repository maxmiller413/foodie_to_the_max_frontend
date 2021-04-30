// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import WishlistsCollection from "./components/WishlistsCollection"
import WishlistCard from "./components/WishlistCard"
import WishlistPlaceCard from "./components/WishlistPlaceCard"

function App() {
  return (
    <div>
      
      <Switch>

        <Route exact path="/wishlist_places/:id">
          <WishlistPlaceCard/>
        </Route>

        <Route exact path="/wishlists/:id">
          <WishlistCard/>
        </Route>

        <Route exact path="/wishlists">
          <WishlistsCollection/>
        </Route>

        <Route exact path="/">
          <HomePage/>
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
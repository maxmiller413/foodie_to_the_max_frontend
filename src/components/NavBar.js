
import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import DarkMode from './DarkMode'
import innerFoodie from '../photos/innerFoodie.jpg'
import Search from "./Search"
import orig from '../photos/orig.jpg'
import styles from "./NavBar.module.css"
import SignUp from "./SignUp"
import Login from "./Login"
import WishlistForm from "./WishlistForm"


function NavBar({ 
    title,
    isDarkMode,
    onToggleDarkMode,
    currentUser,
    setCurrentUser,
    setPlaces,
    onAddWishlist
    
}) {

    const [loginModal, setLoginModal] = useState(false)
    const [signUpModal, setSignUpModal] = useState(false)
    const [wishlistModal, setWishlistModal] = useState(false)

    // 
    // const [places, setPlaces] = useState([])

    function handleLogout(){
        const userId = localStorage.setItem("userId", null)
        setCurrentUser(userId)
    }

    function handleOnClick(){
        setLoginModal((loginModal) => !loginModal)
    }

    function handleSignUpClick(){
        setSignUpModal((signUpModal) => !signUpModal)
    }

    function handleNewWishlistClick(){
        setWishlistModal((wishlistModal) => !wishlistModal)
    }

return (
    // <header> 
    //     {/* <h1 className="letter"> {title} </h1>  */}
    //     <ul className="navbar-home">
    //         <li><Link to="/"> Home </Link></li>
    //         {currentUser ? (
    //             <>
    //                 {/* <li><Link to="/wishlist"> Wishlist </Link></li> */}
    //                 <li><Link to="/logout" onClick={handleLogout}>Logout</ Link></li>
    //             </>
    //         ) : (
    //             <>
    //                 <li><Link to="/signup">Signup</Link></li>
    //                 <li><Link to="/login">Login</Link></li>
    //             </>
    //         )}
    //     </ul>
    //     {/* COMMENTED OUT DarkMode Component and just added button to toggle in NavBar */}
    //     {/* <div>
    //         <DarkMode isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode}>
    //         </DarkMode>
    //     </div> */}
    //     <button onClick={() => onToggleDarkMode()}>
    //             {isDarkMode ? "Dark" : "Light"} Mode
    //     </button>
    // </header>
    // <div className="block">
    // <div className="section hero is-danger" >
    <>
    <nav className={` ${styles['nav-bar']}`} >
        <div className="nav-brand">
            <div id="navMenu" className="navbar-menu">
                <div className="navbar-start">
                    <a href="/" className="navbar">
                        <figure className="is-64x64">
                            <img className="is-rounded" src={innerFoodie} className={styles.innerFoodieImage}  />
                        </figure>
                    </a>  
                </div>
            </div>         
        </div>


        <div className={("navbar-end")}>
            <div className="navbar-item has-dropdown is-active">
                <div className="buttons">
                <NavLink to="/" className="is-active" className="button is-medium is-dark"> Home </NavLink>
                    
                    {currentUser ? (
                        <>
                            
                            <div className="button is-medium is-dark" onClick={handleNewWishlistClick}> New Wishlist </div>
                            {/* <NavLink to="/wishlist_place/new"  > New Wishlist Place </NavLink> */}
                            <NavLink to="/wishlists" className="button is-medium is-dark" > Wishlists </NavLink>
                            <NavLink to="/"  onClick={handleLogout} className="button is-medium is-dark" > Logout </NavLink>
                        </>
                            ) : (
                        <>
                        <div > 
                            <div className="button is-medium is-dark" onClick={handleOnClick}> Login </div>
                            <div  className="button is-medium is-dark" onClick={handleSignUpClick} > Signup </div>
                        </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    </nav>

    <div className={loginModal ? 'modal is-active' : 'modal'}>
        <div className="modal-background" onClick={handleOnClick} ></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Login</p>
                <button className="delete" aria-label="close" onClick={handleOnClick} ></button>
            </header>

            <section className={`modal-card-body ${styles.modal}`}>
                <Login setCurrentUser={setCurrentUser} handleOnClick={handleOnClick}/>
            </section>
            
            <footer className="modal-card-foot">
                {/* <button className="button is-success">Save changes</button> */}
                <button className="modal-close is-large" aria-label="close" onClick={handleOnClick} >Cancel</button>
            </footer>
        </div>
    </div>

    <div className={signUpModal ? 'modal is-active' : 'modal'}>
        <div className="modal-background" onClick={handleSignUpClick} ></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Signup</p>
                <button className="delete" aria-label="close" onClick={handleSignUpClick} ></button>
            </header>

            <section className={`modal-card-body ${styles.modal}`}>
                <SignUp setCurrentUser={setCurrentUser} handleSignUpClick={handleSignUpClick}/>
            </section>
            
            <footer className="modal-card-foot">
                {/* <button className="button is-success">Save changes</button> */}
                <button className="modal-close is-large" aria-label="close" onClick={handleSignUpClick} >Cancel</button>
            </footer>
        </div>
    </div>

    <div className={wishlistModal ? 'modal is-active' : 'modal'}>
        <div className="modal-background" onClick={handleNewWishlistClick} ></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">New Wishlist</p>
                <button className="delete" aria-label="close" onClick={handleNewWishlistClick} ></button>
            </header>

            <section className={`modal-card-body ${styles.modal}`}>
                <WishlistForm currentUser={currentUser} handleNewWishlistClick={handleNewWishlistClick} onAddWishlist={onAddWishlist}/>
            </section>
            
            <footer className="modal-card-foot">
                {/* <button className="button is-success">Save changes</button> */}
                <button className="modal-close is-large" aria-label="close" onClick={handleNewWishlistClick} >Cancel</button>
            </footer>
        </div>
    </div>

    <section className="hero is-medium" className={styles.Hero} > 
        <div className={`hero-body ${styles['form-search']}`} > 
            <div className={`${styles['form-search']}`}> 
                <Search 
                    setPlaces={setPlaces}
                />
            </div> 
        </div>
    </section>
</>
)}

export default NavBar
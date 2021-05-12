import '../index.css';
// import React, { useState } from "react"
import React from "react"
import { NavLink } from "react-router-dom";
import DarkMode from './DarkMode'
import innerFoodie from '../photos/innerFoodie.jpg'
import Search from "./Search"
import orig from '../photos/orig.jpg'
import styles from "./NavBar.module.css"


function NavBar({ 
    title,
    isDarkMode,
    onToggleDarkMode,
    currentUser,
    setCurrentUser,
    setPlaces
    
}) {

    // const [places, setPlaces] = useState([])

    function handleLogout(){
        const userId = localStorage.setItem("userId", null)
        setCurrentUser(userId)
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
                    <NavLink to="/" className="navbar">
                        <figure className="is-64x64">
                            <img className="is-rounded" src={innerFoodie} className={styles.innerFoodieImage}  />
                        </figure>
                          
                        
                    </NavLink>  
                </div>
            </div>         
        </div>
        
        <div className="navbar-end ">
            <div className="navbar-item">
                {/* <div className="buttons">
                    <a className="button is-dark">Github</a>
                    <a className="button is-link">Download</a>
                </div> */}
                <div className="buttons">
                    
                
                <NavLink to="/" className="is-active" className="button is-medium is-dark"> Home </NavLink>
                    
                    {currentUser ? (
                        <>
                            <a href="/wishlists" className="button is-medium is-dark" > Wishlists </a>
                            <NavLink to="/wishlist/new" className="button is-medium is-dark" > New Wishlist </NavLink>
                            {/* <NavLink to="/wishlist_place/new"  > New Wishlist Place </NavLink> */}
                            <NavLink to="/"  onClick={handleLogout} className="button is-medium is-dark" > Logout </NavLink>
                        </>
                            ) : (
                        <>
                        <div > 
                            <NavLink to="/login" className="button is-medium is-dark" > Login </NavLink>
                            <NavLink to="/signup" className="button is-medium is-dark" > Signup </NavLink>
                        </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    </nav>

{/* <section className={styles.Hero} className="hero primary is-fullheight-with-navbar">
<div style={{ width: "100%", height: "100%" }}>
    <div className={styles.Hero} >
        
    </div>
</div>
</section> */}
{/* <section style={{ width: "100%", height: "100%" }}>


<div className='is-fullheight-with-navbar' className={styles.Hero}>
 
  <div className="hero-body">

  </div>
 
</div>
</section> */}

    <section className="hero is-medium" className={styles.Hero} > 
        <div className="hero-body" > 
            <div className="container has-text-centered"> 
            <Search 
                setPlaces={setPlaces}
                
            />

            </div> 
        </div>
    </section>
</>
)}

export default NavBar
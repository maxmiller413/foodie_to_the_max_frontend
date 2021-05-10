import '../index.css';
import React from "react"
import { Link } from "react-router-dom";
import DarkMode from './DarkMode'
import innerFoodie from '../photos/innerFoodie.jpg'


function NavBar({ 
    title,
    isDarkMode,
    onToggleDarkMode,
    currentUser,
    setCurrentUser
}) {

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
    <div className="section hero is-danger" >
        <nav className="navbar">
        
            <div className="navbar-brand">
                
            <a href="/">
                <figure className="image is-128x128">
                    <img src={innerFoodie} ></img>
                </figure>
            </a>     
                
                <a href="/" className="navbar-item">
                    <header className="title is-4">  
                        
                        Inner Foodie 
                    </header>
                </a>

            </div>

            <div className="navbar-end">
                <Link to="/" className="navbar-item"> Home </Link>
                
                {currentUser ? (
                    <>
                        <a href="/wishlists" className="navbar-item" > Wishlists </a>
                        <Link to="/wishlist/new" className="navbar-item" > New Wishlist </Link>
                        {/* <Link to="/wishlist_place/new" className="navbar-item" > New Wishlist Place </Link> */}
                        <Link to="/" className="navbar-item" onClick={handleLogout} > Logout </Link>
                    </>
                        ) : (
                    <>
                        <Link to="/login" className="navbar-item "> Login </Link>
                        <Link to="/signup" className="navbar-item"> Signup </Link>
                    </>
                )}
                
            </div>

        </nav>
    </div>
    // </div>
)}

export default NavBar
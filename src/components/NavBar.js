import '../index.css';
import React from "react"
import { Link } from "react-router-dom";
import DarkMode from './DarkMode'


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
    <div className="block">
        <nav className="nav">

            <div className="nav-left">
                <a href="" className="nav-item">
                    <h1 className="title is-4"> Foodie-to-the-Max </h1>
                </a>
            </div>

            <div className="nav-right nav-menu is-active">
                <Link to="/" className="nav-item"> Home </Link>
                
                {currentUser ? (
                    <>
                        <Link to="/wishlists" className="nav-item" > Wishlists </Link>
                        <Link to="/wishlist/new" className="nav-item" > New Wishlist </Link>
                        <Link to="/wishlist_place/new" className="nav-item" > New Wishlist Place </Link>
                        <Link to="/" className="nav-item" onClick={handleLogout} > Logout </Link>
                    </>
                        ) : (
                    <>
                        <Link to="/login" className="nav-item"> Login </Link>
                        <Link to="/signup" className="nav-item"> Signup </Link>
                    </>
                )}
                
            </div>

        </nav>
    </div>
)}

export default NavBar
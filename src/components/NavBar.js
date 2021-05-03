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
    <header> 
        {/* <h1 className="letter"> {title} </h1>  */}
        <ul className="navbar-home">
            <li><Link to="/"> Home </Link></li>
            {currentUser ? (
                <>
                    {/* <li><Link to="/wishlist"> Wishlist </Link></li> */}
                    <li><Link to="/logout" onClick={handleLogout}>Logout</ Link></li>
                </>
            ) : (
                <>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </>
            )}
        </ul>
        {/* COMMENTED OUT DarkMode Component and just added button to toggle in NavBar */}
        {/* <div>
            <DarkMode isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode}>
            </DarkMode>
        </div> */}
        <button onClick={() => onToggleDarkMode()}>
                {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
)}

export default NavBar
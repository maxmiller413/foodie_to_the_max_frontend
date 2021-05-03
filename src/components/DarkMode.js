import React from 'react'

function DarkMode (){
    return (
        <>
            {/* <p className={isDarkMode ? 'App' : 'App light'}></p>
            <label className="switch" onClick={() => onToggleDarkMode(onToggleDarkMode => !onToggleDarkMode)}>
                <input type="checkbox" {...isDarkMode ? 'checked' : ''} />
                <span className="slider round"></span>
            </label> */}
            {/* <button onClick={() => onToggleDarkMode()}>
                {isDarkMode ? "Dark" : "Light"} Mode
            </button> */}
        </>
    )
}

// const chk = document.getElementById('chk')

// chk.addEventListener('change', () => {
//     document.body.classList.toggle('dark')
// })

export default DarkMode
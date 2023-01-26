import React from "react";

function DarkModeButton({darkMode, handleDarkMode}) {
    return (
        <div onClick={handleDarkMode} className="flex fixed z-40 bottom-6 right-6 border-2 bg-gray-900 border-black w-7 h-7 hover:bg-violet-400 dark:bg-white dark:hover:bg-violet-400">
            <button className="m-auto w-max h-max">{darkMode ? "☀️" : "🌙"} </button>
        </div>
    )
}

export default DarkModeButton
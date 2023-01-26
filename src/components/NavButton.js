import React from "react";
import { NavLink } from "react-router-dom";

function NavButton({ buttonText, path }) {
    return (
        <NavLink className="button p-6 border-l-2 border-black font-mono text-4xl hover:bg-black hover:text-white dark:text-white dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:text-black" exact to={path}>{buttonText}</NavLink>
    )
}

export default NavButton;
import React from "react";
import { NavLink } from "react-router-dom";

function NavButton({ buttonText, path }) {
    return (
        <NavLink className="button p-6 border-l-2 border-black font-mono text-4xl hover:bg-gray-300" exact to={path}>{buttonText}</NavLink>
    )
}

export default NavButton;
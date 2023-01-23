import React from "react";

function Button({ buttonText }) {
    return (
        <button className="p-6 border-l-2 border-black font-mono text-4xl hover:bg-gray-300">{buttonText}</button>
    )
}

export default Button;
import React from "react";
import NavButton from "./components/NavButton";

function Navigation () {

    return (
    <div>
      <header className='border-b-2 border-black min-w-max'>
        <h1 className='inline-flex bg-[#FFE900] font-mono font-semibold text-4xl w-fit border-black border-r-2 p-6'>Where To Next?</h1>
        <div className="flex float-right">
            <NavButton buttonText={"Home"} path={"/"}/>
            <NavButton buttonText={"All Trips"} path={"/trips"}/>
            <NavButton buttonText={"New Trip"} path={"/new-trip"}/>
        </div>
      </header>
    </div>
    )
}
export default Navigation;
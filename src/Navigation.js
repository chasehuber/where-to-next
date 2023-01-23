import React from "react";
import Button from "./components/Button";

function Navigation () {


    return (
     <div className='float-right'>
      <Button buttonText={"Home"}/>
      <Button buttonText={"All Trips"}/>
      <Button buttonText={"New Trip"}/>
     </div>
    )
}
export default Navigation;
import { NavLink } from 'react-router-dom';

function Navigation () {

    return (
     <div className="textfixed top-0 
                     flex
                     bg-gray-900 text-white shadow">
      <NavLink className="button" exact to="/">Home</NavLink>
      <NavLink className="button" exact to="/trips">All Trips</NavLink>
      <NavLink className="button" exact to="/new-trip">Add New Trip</NavLink>
     </div>
    )
}
export default Navigation;
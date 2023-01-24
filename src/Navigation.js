import { NavLink } from 'react-router-dom';

function Navigation () {

    return (
     <div>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/trips">All Trips</NavLink>
      <NavLink exact to="/new-trip">Add New Trip</NavLink>
     </div>
    )
}
export default Navigation;
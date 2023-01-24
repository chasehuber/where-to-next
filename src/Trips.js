import { Link } from 'react-router-dom';

function Trips ({ trip, url, onTripDelete, enterEditMode }) {

    const { image, city, country, cost, season, attraction1, attraction2, attraction3, id } = trip

    const handleDelete = () => {
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(onTripDelete(trip))
    }
    
    
    return(
          <div className="cards">
            <img src={image} alt="" />
            <div>
             <h3>{city}, {country}</h3>
             <p>Est. Cost: {cost}</p>
             <div>When to visit: 
                <p>{season}</p>
             </div> 
            </div>
            <div>
             <ul>Attractions:
               <li>1. {attraction1}</li>
               <li>2. {attraction2}</li>
               <li>3. {attraction3}</li>
             </ul>
            </div>
            <div>
              <Link to={`/trips/${id}/edit`}>
                <button>Edit Trip </button>
              </Link>
                <br />
                <button onClick={handleDelete}>Archive Trip</button>
            </div>
          </div>
      )
  }
  
  export default Trips;
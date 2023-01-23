
function Trips ({ trip }) {

    const { image,city, country, cost, season, attractions } = trip
    
    return(
          <div className="card">
            <img src={image} alt="" />
            <h3>{city}, {country}</h3>
            <p>{cost}</p>
            <p>{season}</p>
            <h4>Attractions:</h4>
            <button>Edit</button>
            <br />
            <button>Archive</button>
          </div>
      )
  }
  
  export default Trips;
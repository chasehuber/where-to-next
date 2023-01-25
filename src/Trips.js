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
      <div className="border-2 border-black min-w-[304px] max-w-[304px] font-mono p-6 mx-2 mt-1">
        <img className="relative w-96 h-52 border-black border-2" src={image} alt="" />
        <div className="mt-1 text-white">
          <h3 className="bg-black mb-1 p-1">City: {city}</h3>
          <h3 className="bg-black mb-1 p-1">Country: {country}</h3>
          <p className="bg-black mb-1 p-1">Cost: {cost}</p>
          <p className="bg-black mb-1 p-1">Season: {season}</p>
          <ul className="bg-black mb-1 p-1" >Attractions:
            <li>1. {attraction1}</li>
            <li>2. {attraction2}</li>
            <li>3. {attraction3}</li>
          </ul>
          <button onClick={handleDelete} className="border-2 border-black text-black p-2 w-28 float-right mt-1 hover:bg-red-500 hover:text-white">Archive</button>
          <Link to={`/trips/${id}/edit`}>
            <button className="border-2 border-black text-black p-2 w-28 float-left mt-1 hover:bg-black hover:text-white">Edit</button>
          </Link>
        </div>
      </div>
    )
  }
  
  export default Trips;
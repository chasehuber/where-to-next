function Trips ({ trip }) {

    const { image,city, country, cost, season, attractions } = trip
    
    return(
          <div className="border-2 border-black max-w-[304px] font-mono p-6 m-2">
            <img className="relative w-96 h-52 border-black border-2" src={image} alt="" />
            <div className="mt-1 text-white">
              <h3 className="bg-black mb-1 p-1">City: {city}</h3>
              <h3 className="bg-black mb-1 p-1">Country: {country}</h3>
              <p className="bg-black mb-1 p-1">Cost: {cost}</p>
              <p className="bg-black mb-1 p-1">Season: {season}</p>
              <h4 className="bg-black mb-1 p-1">Attractions:</h4>
              <button className="border-2 border-black text-black p-2 w-28 float-left mt-1 hover:bg-black hover:text-white">Edit</button>
              <button className="border-2 border-black text-black p-2 w-28 float-right mt-1 hover:bg-red-500 hover:text-white">Archive</button>
            </div>
          </div>
      )
  }
  
  export default Trips;
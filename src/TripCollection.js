import Trips from './Trips';
import Search from './Search';


function TripCollection ({ trips, url, onTripDelete, searchText, onChangeSearch }) {

   const displayTrips = trips.map((trip, index) => (
    <Trips 
      key={index}
      trip={trip}
      url={url}
      onTripDelete={onTripDelete}
    />
   ))

   return (
    <div>
        <Search 
            searchText={searchText}
            onChangeSearch={onChangeSearch}
          />
        <ul className='card'>{displayTrips}</ul>
    </div>
    )
}

export default TripCollection;
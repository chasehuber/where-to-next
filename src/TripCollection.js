import Navigation from './Navigation';
import Search from './Search';
import Trips from './Trips';


function TripCollection ({ trips, searchText, onChangeSearch }) {

   const displayTrips = trips.map(trip => (
    <Trips 
      key={trip.id}
      trip={trip}
    />
   ))

   return (
    <div>
        <Navigation/>
        <Search 
            searchText={searchText}
            onChangeSearch={onChangeSearch}
        />
        <ul className="cards">{displayTrips}</ul>
    </div>
    )
}

export default TripCollection;
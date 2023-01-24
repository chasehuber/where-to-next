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
        <div className="flex">{displayTrips}</div>
    </div>
    )
}

export default TripCollection;
import Navigation from './Navigation';
import Search from './Search';
import Trips from './Trips';


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
    <div className="h-full dark:bg-gray-900">
        <Navigation/>
        <Search 
            searchText={searchText}
            onChangeSearch={onChangeSearch}
          />
        <div className="flex flex-wrap justify-items-start">
          {displayTrips}
        </div>
    </div>
    )
}

export default TripCollection;
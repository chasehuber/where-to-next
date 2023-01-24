import Navigation from './Navigation';
import Home from './Home';
import TripCollection from './TripCollection';
import NewTripForm from './NewTripForm';
import TripEditForm from './TripEditForm';
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

const url = 'http://localhost:3000/trips'

function App() {

  const [ trips, setTrips ] = useState([])
  const [ searchText, setSearchText ] = useState("")

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setTrips(data))
  }, [])

  const tripsToDisplay = trips.filter(trip => (
    trip.city.toLowerCase().includes(searchText.toLowerCase())
  ))

  const addNewTrip = (addTrip) => {
    setTrips([addTrip, ...trips])
  }

  const archiveTrip = (tripToDelete) => {
    const updatedTripList = trips.filter(trip => (
      trip.id !== tripToDelete.id))
       setTrips(updatedTripList)
  }

  const editTrip = (editedTrip) => {
    const updatedTrips = trips.map((origTrip) => {
      if (origTrip.id === editedTrip.id) {
        return editedTrip;
      } else {
        return origTrip;
      }
    });
      setTrips(updatedTrips)
  }

  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/trips/:id/edit">
          <TripEditForm 
            url={url}
            onUpdatedTrip={editTrip}
          />
        </Route>

        
        <Route path="/new-trip">
          <NewTripForm 
            url={url}
            onAddTrip={addNewTrip}
          />
        </Route>

        <Route path="/trips">
          <TripCollection 
            trips={tripsToDisplay}
            searchText={searchText}
            onChangeSearch={setSearchText}
            url={url}
            onTripDelete={archiveTrip}
          />
        </Route>


      </Switch>
    </div>

  );
}



export default App;
import Navigation from './Navigation';
import Home from './Home';
import TripCollection from './TripCollection';
import NewTripForm from './NewTripForm';
import Search from './Search';
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

  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/trips/:id/edit">
          <TripEditForm />
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
          />
        </Route>


      </Switch>
    </div>

  );
}



export default App;
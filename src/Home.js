import TripCollection from './TripCollection';
import Search from './Search';
import NewTripForm from './NewTripForm';

function Home () {

    return (
     <div>
      <header class="text-center">
        <h1>Where To Next??</h1>
        <h2>Keep track of your bucket list destinations and get inspired for future trips!</h2>
       </header>
       <TripCollection />
       <Search />
       <NewTripForm />
     </div>
    )
}

export default Home;
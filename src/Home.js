import TripCollection from './TripCollection';
import Search from './Search';
import NewTripForm from './NewTripForm';
import Navigation from './Navigation';

function Home () {

    return (
     <div>
      <header className='border-b-2 border-black min-w-max'>
        <h1 className='inline-flex bg-[#FFE900] font-mono font-semibold text-4xl w-fit border-black border-r-2 p-6'>Where To Next?</h1>
        <Navigation/>
        <img className="mx-auto object-none object-center drop-shadow-xl " src='https://chapelboromedia.s3.amazonaws.com/uploads/2019/04/19113915/aircraft-aircraft-wing-airplane-2007401-1280x640.jpg' />
      </header>
     </div>
    )
}

export default Home;
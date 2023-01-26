import TripCollection from './TripCollection';
import Search from './Search';
import NewTripForm from './NewTripForm';
import Navigation from './Navigation';

function Home () {

    return (
     <div className="dark:bg-gray-900">
      <Navigation/>
      <div>

      </div>
      <div className="flex p-6">
          <div className="border-2 border-black w-1/3 dark:border-slate-600">
            <h1 className="font-mono text-4xl text-white p-6 font-bold bg-black dark:bg-slate-600">The premier trip planning website.</h1>
            <p className="font-mono text-xl p-6 dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="border-2 border-l-0 border-black dark:border-slate-600">
            <img className="h-full" src="https://chapelboromedia.s3.amazonaws.com/uploads/2019/04/19113915/aircraft-aircraft-wing-airplane-2007401-1280x640.jpg"/>
          </div>
      </div>
     </div>
    )
}

export default Home;
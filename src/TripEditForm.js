import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Navigation from './Navigation';


function TripEditForm ({ url, onUpdatedTrip }) {

    let history = useHistory();

    const { id } =  useParams();

    const [ formData, setFormData ] = useState({
        image: "",
        city: "",
        country: "",
        cost: "",
        season: "",
        attraction1: "",
        attraction2: "",
        attraction3: ""
    });

    useEffect(() => {
        fetch(`${url}/${id}`)
        .then(res => res.json())
        .then(trips => setFormData(trips));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value })
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       fetch(`${url}/${id}`, {
         method: 'PATCH',
         headers: {
          'Content-Type': 'application/json',
           Accept: 'application/json',
          },
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then((updatedTrip) => {
            onUpdatedTrip(updatedTrip)
        })
        history.push("/trips")
    }

    return(
      <div>
        <Navigation/>
        <div className="font-mono border-2 border-black max-w-max mx-auto mt-2">
          <div className="w-96 bg-black">
            <h2 className="text-2xl text-white text-center p-6">Edit Trip</h2>
          </div>
          <div className="px-6 pb-6">
            <form onSubmit={handleSubmit}>
              <div className="my-2 border-2 border-black">
                <label className="bg-black text-white p-1">Image:</label>
                <input
                  type="text"
                  name="image"
                  placeholder="City image url"
                  value={formData.image}
                  onChange={handleChange}
                  className="mx-1 w-64"
                />
              </div>

              <div className="my-2 border-2 border-black">
                <label className="bg-black text-white p-1">City:</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City name"
                  value={formData.city}
                  onChange={handleChange}
                  className="mx-1"
                />
              </div>
              <div className="my-2 border-2 border-black">
                <label className="bg-black text-white p-1">Country:</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country name"
                  value={formData.country}
                  onChange={handleChange}
                  className="mx-1"
                />
              </div>
              <div className="my-2 border-2 border-black">
                <label className="bg-black text-white p-1">Estimated Cost:</label>
                <select className="w-44"
                  name="cost" value={formData.cost} onChange={handleChange}  >
                  <option value="">Select Cost</option>
                  <option value="$">$</option>
                  <option value="$$">$$</option>
                  <option value="$$$">$$$</option>
                </select>
              </div>
              <div className="my-2 border-2 border-black">
                <label className="bg-black text-white p-1">When to Visit:</label>
                <select className="w-44"
                  name="season" value={formData.season} onChange={handleChange} >
                  <option value="">Select Season</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                  <option value="Fall">Fall</option>
                  <option value="Winter">Winter</option>
                </select>
              </div>
              <div className="my-2">
                <label className="inline-flex bg-black text-white p-1">Attractions:</label>
                <div className="relative mt-1">
                  <input
                    type="text"
                    name="attraction1"
                    placeholder="Add attraction"
                    value={formData.attraction1}
                    onChange={handleChange}
                    className="flex mb-1 border-2 border-black w-full p-1"
                  />
                  <input
                    type="text"
                    name="attraction2"
                    placeholder="Add attraction"
                    value={formData.attraction2}
                    onChange={handleChange}
                    className="flex mb-1 border-2 border-black w-full p-1"
                  />
                  <input
                    type="text"
                    name="attraction3"
                    placeholder="Add attraction"
                    value={formData.attraction3}
                    onChange={handleChange}
                    className="flex mb-1 border-2 border-black w-full p-1"
                  />
                </div>
              </div>
              <div className="border-2 border-black p-2 w-max mx-auto hover:bg-green-500 hover:text-white">
                <button >Update Trip</button>
              </div>
            </form> 
          </div>
        </div>
      </div>
    )
}

export default TripEditForm
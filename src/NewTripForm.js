
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const initialState = {
    image: "",
    city: "",
    country: "",
    cost: "",
    season: "",
    attraction1: "",
    attraction2: "",
    attraction3: ""
}

function NewTripForm ({ url, onAddTrip }) {

  let history = useHistory();

  const [ formData, setFormData ] = useState(initialState)

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTrip = {
        image: formData.image,
        city: formData.city,
        country: formData.country,
        cost: formData.cost,
        season: formData.season,
        attraction1: formData.attraction1,
        attraction2: formData.attraction2,
        attraction3: formData.attraction3
    }

    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(newTrip)
    })
    .then(res => res.json())
    .then(onAddTrip)
    history.push("/trips")
    setFormData(initialState)
  }

    return(
        <div>
          <form onSubmit={handleSubmit}>
          <h2>Add New Trip</h2>
          <label>Image:</label>
          <input
               type="text"
               name="image"
               placeholder="City image url"
               value={formData.image}
               onChange={handleChange}
            />
            <br />
            <label>City: </label>
            <input
               type="text"
               name="city"
               placeholder="City name"
               value={formData.city}
               onChange={handleChange}
            />
            <br />
            <label>Country: </label>
            <input 
              type="text"
              name="country"
              placeholder="Country name"
              value={formData.country}
              onChange={handleChange}
            />
            <br />
            <label>Estimated Cost: </label>
            <select
              name="cost" value={formData.cost} onChange={handleChange} >
              <option value="">Select Cost</option>
              <option value="$">$</option>
              <option value="$$">$$</option> 
              <option value="$$$">$$$</option> 
            </select>
            <br />
            <label >When to Visit: </label>
            <select
              name="season" value={formData.season} onChange={handleChange} >
              <option value="">Select Season</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option> 
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
            </select>
            <br />
            <label >Attractions:</label>
            <input 
              type="text"
              name="attraction1"
              placeholder="Add attraction"
              value={formData.attraction1}
              onChange={handleChange}
              
            />
             <input 
              type="text"
              name="attraction2"
              placeholder="Add attraction"
              value={formData.attraction2}
              onChange={handleChange}
              
            />
             <input 
              type="text"
              name="attraction3"
              placeholder="Add attraction"
              value={formData.attraction3}
              onChange={handleChange}
              
            />
            <br />
            <button>Add New Trip</button>
          </form>  
        </div>
    )
}

export default NewTripForm
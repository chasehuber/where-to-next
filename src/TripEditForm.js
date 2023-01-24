import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';


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
        <form onSubmit={handleSubmit}>
        <h2 >Edit Trip</h2>
        <label>Image: </label>
        <input
             type="text"
             name="image"
             placeholder="City image url"
             value={formData.image}
             onChange={handleChange}
             
             
          />
          <br />
          <label >City: </label>
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
          <label >Estimated Cost: </label>
          <select
            name="cost" value={formData.cost} onChange={handleChange}  >
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
            <button>Update Trip</button>
        </form> 
    )
}

export default TripEditForm
import React from "react";
import Button from "./components/Button"

import { useState } from 'react';

const initialState = {
    image: "",
    city: "",
    country: "",
    cost: "",
    season: ""
}

function NewTripForm ({ url, onAddTrip }) {

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
    setFormData(initialState)
  }

    return(
        <div>
          <h2>New Trip</h2>
          <form onSubmit={handleSubmit}>
          <input
               type="text"
               name="image"
               placeholder="City image url"
               value={formData.image}
               onChange={handleChange}
            />
            <br />
            <input
               type="text"
               name="city"
               placeholder="City name"
               value={formData.city}
               onChange={handleChange}
            />
            <br />
            <input 
              type="text"
              name="country"
              placeholder="Country name"
              value={formData.country}
              onChange={handleChange}
            />
            <br />
            <select
              name="cost" value={formData.cost} onChange={handleChange}>
              <option value="">Select Cost</option>
              <option value="$">$</option>
              <option value="$$">$$</option> 
              <option value="$$$">$$$</option> 
            </select>
            <br />
            <select
              name="season" value={formData.season} onChange={handleChange}>
              <option value="">Select Season</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option> 
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
            </select>
            <br />
            <button>Add New Trip</button>
          </form>  
        </div>
    )
}
export default NewTripForm
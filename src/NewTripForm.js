import React from "react";
import Navigation from "./Navigation";

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

function NewTripForm({ url, onAddTrip }) {

  let history = useHistory();

  const [formData, setFormData] = useState(initialState)

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

    fetch(url, {
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

  return (
    <div className="dark:bg-gray-900 h-full">
      <Navigation />
      <div className="font-mono border-2 border-black max-w-max mx-auto mt-2 dark:border-slate-600">
        <div className="w-96 bg-black dark:bg-slate-600">
            <h2 className="text-2xl text-white text-center p-6">Add New Trip</h2>
        </div>
        <div className="px-6 pb-6">
          <form onSubmit={handleSubmit}>
            <div className="my-2 border-2 border-black dark:border-slate-600">
              <label className="bg-black text-white p-1 dark:bg-slate-600">Image:</label>
              <input
                type="text"
                name="image"
                placeholder="City image url"
                value={formData.image}
                onChange={handleChange}
                className="mx-1 dark:bg-gray-900 dark:text-gray-400"
              />
            </div>
            <div className="my-2 border-2 border-black dark:border-slate-600">
              <label className="bg-black text-white p-1 dark:bg-slate-600">City:</label>
              <input
                type="text"
                name="city"
                placeholder="City name"
                value={formData.city}
                onChange={handleChange}
                className="mx-1 dark:bg-gray-900 dark:text-gray-400"
              />
            </div>
            <div className="my-2 border-2 border-black dark:border-slate-600">
              <label className="bg-black text-white p-1 dark:bg-slate-600">Country:</label>
              <input
                type="text"
                name="country"
                placeholder="Country name"
                value={formData.country}
                onChange={handleChange}
                className="mx-1 dark:bg-gray-900 dark:text-gray-400"
              />
            </div>
            <div className="my-2 border-2 border-black dark:border-slate-600">
              <label className="bg-black text-white p-1 dark:bg-slate-600">Estimated Cost:</label>
              <select
                name="cost" value={formData.cost} onChange={handleChange} className="dark:bg-gray-900 dark:text-gray-400" >
                <option value="">Select Cost</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
              </select>
            </div>
            <div className="my-2 border-2 border-black dark:border-slate-600">
              <label className="bg-black text-white p-1 dark:bg-slate-600">When to Visit:</label>
              <select
                name="season" value={formData.season} onChange={handleChange} className="dark:bg-gray-900 dark:text-gray-400" >
                <option value="">Select Season</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
              </select>
            </div>
            <div className="my-2">
              <label className="inline-flex bg-black text-white p-1 dark:bg-slate-600">Attractions:</label>
              <div className="relative mt-1">
                <input
                  type="text"
                  name="attraction1"
                  placeholder="Add attraction"
                  value={formData.attraction1}
                  onChange={handleChange}
                  className="flex mb-1 border-2 border-black w-full p-1 dark:border-slate-600 dark:bg-gray-900"
                />

                <input
                  type="text"
                  name="attraction2"
                  placeholder="Add attraction"
                  value={formData.attraction2}
                  onChange={handleChange}
                  className="flex mb-1 border-2 border-black w-full p-1 dark:border-slate-600 dark:bg-gray-900"
                />

                <input
                  type="text"
                  name="attraction3"
                  placeholder="Add attraction"
                  value={formData.attraction3}
                  onChange={handleChange}
                  className="flex mb-1 border-2 border-black w-full p-1 dark:border-slate-600 dark:bg-gray-900"
                />
              </div>
            </div>
            <div className="border-2 border-black p-2 w-max mx-auto hover:bg-green-500 hover:text-white dark:border-slate-600 dark:text-white dark:hover:text-black">
              <button>Add New Trip</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default NewTripForm
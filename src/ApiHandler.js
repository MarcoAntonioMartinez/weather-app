import React, { useState } from 'react';
import axios from 'axios';

function ApiHandler() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_KEY}`;
        
const searchLocation = (event) => {
  if(event.key === 'Enter'){
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
  setLocation('')
  }
}    

return (
  <div className='app'>
    <div className="search">
      <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"/>
    </div>
  <div className="container">
    <div className="location">
      <p>{data.name}</p>
    </div>
    <div className ="temp">
      {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
    </div>
  
  </div>
  

  
  </div>
);

/*
  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  ); */
}

export default ApiHandler;
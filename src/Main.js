import Cities from './Cities.js'
import ApiHandler from './ApiHandler.js';

function Main() {
  return (
    <body>
      <div className="Main">
        {/* placeholder: label for this input*/}
      
      <div className="city">
        <label for="city">City:</label>
        
       <Cities />

        
      </div>
      {/* placeholder : label for this weather display
        container to display weather*/}
      <div className="weather">
       {/* placeholder: this is where all the weather api stuff gets displayed */}   
        <ApiHandler />

       
      </div>

    </div>
   
   
  </body>
  
  );
}

export default Main;
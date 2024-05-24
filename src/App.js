import './App.css';
import ApiHandler from './ApiHandler.js';


function App() {
  return (
    
    <div>
      <div className="weather">
       {/* placeholder: this is where all the weather api stuff gets displayed */}   
        <ApiHandler />
      </div>
  </div>
  );
}

export default App;

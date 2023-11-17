function Input(){
    return(
        <body>
            <div className="city">
                <label for="city">City:</label>
                // change this input type to something that has intellisense 
                <input type="text" name="city"/>
            </div>
            <div className="weather">
                //this is where all the weather api stuff gets displayed
                
            </div>
        </body>
        
    )

}

export default Input;
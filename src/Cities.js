import DropdownList from "react-widgets/DropdownList";


function Cities() {
    return (
        <div className ="dropdown">
            <DropdownList
                defaultValue="Chicago"
                data={["New York", "Chicago", "San Francisco", "Seattle"]}
            />  
        </div>
    );
  }
  
  export default Cities;
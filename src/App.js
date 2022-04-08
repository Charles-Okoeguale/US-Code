import React, {useMemo, useState} from "react";
import { BsFillXCircleFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai"


function App() {
  const [ value, setValue ] = useState('')
  var isValidZip = useMemo(() => value.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/), [value]);

  const updateValue = (val) => {
    const filteredVal = val.split().filter(text => !isNaN(text));
    if (filteredVal.length >= 1) {
      setValue(filteredVal.join());
    }
  }

  return (
    <div className="App">
       <div className="info">
        <p>Type in a valid zip code</p>
      </div> 
      <div className='zipcode'>
          <input type="text"  id='zipcode'    value={value} onChange={(e) => updateValue(e.target.value)}/>
          <label htmlFor="zipcode">Zip code...</label>
          <span className='indicator'>
          { isValidZip ? <AiFillCheckCircle  color="green" className="ri"/> : <BsFillXCircleFill  color="orange" className="ri"/> }
          </span>  
      </div>
     
    </div>
  );
}

export default App;


// @"^\d{10}$"
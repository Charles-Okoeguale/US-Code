import React, {useMemo, useState} from "react";
import { BsFillXCircleFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai"
import axios from "axios";


function App() {
  const [ value, setValue ] = useState('')
  const [ info, setInfo ] = useState('')
  var isValidZip = useMemo(() => value.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/), [value]);

  const updateValue = (val) => {
    const filteredVal = val.split().filter(val => !isNaN(val));
    setValue(filteredVal.join());
    if (filteredVal >= 5) {
      axios.get(`https://www.zipwise.com/webservices/zipinfo.php?key=qnpdvgx7mss4meum&zip=${val}&format=json`)
      .then((res) => {
       setInfo(res.data.results.county)
      })
    } 
  }

  return (
    <div className="App">
       <div className="info">
        <p>{info}</p>
      </div> 
      <div className='zipcode'>
          <input type="text"  id='zipcode'    value={value} onChange={(e) => updateValue(e.target.value)}/>
          <label htmlFor="zipcode">Type in valid american zip code...</label>
          <span className='indicator'>
          { isValidZip ? <AiFillCheckCircle  color="green" className="ri"/> : <BsFillXCircleFill  color="orange" className="ri"/> }
          </span>  
      </div>
     
    </div>
  );
}

export default App;

import React from 'react'
import BASEURL from '../confiq';
import axios from 'axios';
import { useState,useEffect } from 'react';
const State = () => {
const [country,setCountry]=useState("");
const [state,setstate]=useState("");
const [countrydata,setCountrydata]=useState([]);
  const LoadData=async()=>{
    let api=`${BASEURL}/user/getcountry`;
    try {
      let response=await axios.get(api);
      setCountrydata(response.data)
    } catch (error) {
     console.log(error) 
    }
  }

  useEffect(()=>{
    LoadData();
  },[])

const handleSubmit=async()=>{  
  let api=`${BASEURL}/user/state`;
  try {
    let response=await axios.post(api,{country:country,state:state});
    alert(response.data)
  } catch (error) {
   console.log(error) 
  }
}




const ans=countrydata.map((key)=>{
  return <option value={key.Country}>{key.Country}</option>;
})

  return (
    <>
    <div className='container'>
    Select Country: 
    <select value={country} onChange={(e)=>{setCountry(e.target.value)}}>
    <option value="">---select country---</option>
    {ans}
    </select>


     <br />
     Enter State:
     <input type="text" value={state} onChange={(e)=>{setstate(e.target.value)}} disabled={country==""}/>

     <button onClick={handleSubmit}>Add state</button>
    </div>
    </>
  )
}

export default State
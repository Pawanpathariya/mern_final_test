import React from 'react'
import BASEURL from '../confiq';
import axios from 'axios';
import { useState,useEffect } from 'react';
const City = () => {

  const [country,setCountry]=useState("");
  const [state,setstate]=useState("");
  const [city,setcity]=useState("");
  const [countrydata,setCountrydata]=useState([]);
  const [statedata,setstatedata]=useState([]);
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
      LoadDatastate();
    },[country])


    const LoadDatastate=async()=>{
      let api=`${BASEURL}/user/getstate`;
      try {
        let response=await axios.post(api,{country:country});

        setstatedata(response.data)
      } catch (error) {
       console.log(error) 
      }
    }
  
  const handleSubmit=async()=>{  
    let api=`${BASEURL}/user/city`;
    try {
      let response=await axios.post(api,{country:country,state:state,city:city});
      alert(response.data)
    } catch (error) {
     console.log(error) 
    }
  }
  
  
  
  useEffect(()=>{
    LoadData();
  },[])
  
  const ans=countrydata.map((key)=>{
    return <option value={key.Country}>{key.Country}</option>;
  })
  const ans1=statedata.map((key)=>{
    return <option value={key.state}>{key.state}</option>;
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
     Select State: 
    <select value={state} onChange={(e)=>{setstate(e.target.value)}} disabled={country==""}>
    <option value="">---select State---</option>
    {ans1}
    </select>

<br />
Enter City
    <input type="text" value={city} onChange={(e)=>{setcity(e.target.value)}}/>
     <button onClick={handleSubmit}>Add City</button>
    </div>
    </>
  )
}

export default City
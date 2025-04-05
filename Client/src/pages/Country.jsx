import React from 'react'
import { useState } from 'react'
import BASEURL from '../confiq';
import axios from 'axios';
const Country = () => {
    const [Country,setCountry]=useState();

    const handleSubmit=async()=>{
      let api=`${BASEURL}/user/country`;
      try {
        let response=await axios.post(api,{country:Country});
        alert(response.data)
      } catch (error) {
       console.log(error) 
      }
    }
  return (
    <>
    <div className='container'>
  <h3>Enter Country</h3>
  <input type="text" value={Country}  onChange={(e)=>{setCountry(e.target.value)
  }}/>
  <button onClick={handleSubmit}>Add Country </button>
    </div>
    
    </>
  )
}

export default Country
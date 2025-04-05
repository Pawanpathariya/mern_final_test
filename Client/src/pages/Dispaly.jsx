
import React from 'react'
import BASEURL from '../confiq';
import axios from 'axios';
import { useState,useEffect } from 'react';
const Dispaly = () => {

  
  const [country,setCountry]=useState("");
  const [state,setstate]=useState("");
  const [countrydata,setCountrydata]=useState([]);
  const [statedata,setstatedata]=useState([]);
  const [searchdata,setsearchdata]=useState([]);
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
    let api=`${BASEURL}/user/display`;
    try {
      let response=await axios.post(api,{country:country,state:state});
      setsearchdata(response.data)
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


const deletebutton=async(id)=>{
let api=`${BASEURL}/user/delete`;
try {
  let response=await axios.post(api,{id:id});
  handleSubmit();
  alert(response.data)
 
} catch (error) {
  console.log(error)
}

}

  const ansdata=searchdata.map((key)=>{
    return(
      <>
     <tr>
      <td>{key.usercity}</td>
      <td>{key.userstate}</td>
      <td>{key.usercountry}</td>
      <td><button onClick={()=>{deletebutton(key._id)}}>Delete</button></td>
    </tr>
    </>
    )
  })
  
  return (
    <>
    <div className='container'>
<h3>Display Page</h3>
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
<button onClick={handleSubmit}>Display</button>

    </div>
    
    <table>
<tr>
  <th>City</th>
  <th>State</th>
  <th>Country</th>
  <th></th>
</tr> 
{ansdata}
    </table>
    </>
  )
}

export default Dispaly
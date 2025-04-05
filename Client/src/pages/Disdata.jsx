import React from 'react'
import BASEURL from '../confiq';
import {useState,useEffect} from 'react';
import axios from 'axios';
const Disdata = () => {
  const [data,setdata]=useState([]);

const loaddata=async()=>{
  let api=`${BASEURL}/user/getdata`;
  try {
    let response=await axios.get(api);
    setdata(response.data)
  } catch (error) {
   console.log(error) 
  }
}
useEffect(()=>{
  loaddata();
},[])

const ans=data.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.usercity}</td>
      <td>{key.userstate}</td>
      <td>{key.usercountry}</td>
    </tr>
    </>
  )

})

  return (
    <>
    <h3>Display Page</h3>

    <table>
<tr>
  <th>City</th>
  <th>State</th>
  <th>Country</th>
</tr>
{ans}


    </table>
    
    </>
  )
}

export default Disdata
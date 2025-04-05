import React from 'react'
import {Link} from 'react-router-dom'
const Topbar = () => {
  return (
<nav>

    <Link to="/home">Home</Link>
    <Link to="/country">Country</Link>
    <Link to="/state">state</Link>
    <Link to="/city">City</Link>
    <Link to="/disdata">Display</Link>
    <Link to="/display">Search</Link>
</nav>
  )
}

export default Topbar

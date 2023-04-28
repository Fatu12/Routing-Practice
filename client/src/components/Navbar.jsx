import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <p><Link to={'/'}> Go to Home</Link>|<Link to={'/color'}> Go to Color</Link> |<Link to={'/Hello'}> Go to Hello</Link>|<Link to={'/4'}> Go to Number</Link></p>
           

    </div>
  )
}

export default Navbar
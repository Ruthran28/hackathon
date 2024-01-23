import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <header class="app-header">
        <h1 id="heading">AuroTech</h1>
        <nav className='nav'>
            <ul>
              <li> <Link to={'/'}>Home</Link></li>
              <li> <Link to={'repair'}>Repair & maintan</Link></li>
              <li> <Link to={'expense'}>Expense</Link></li>
              <li><Link to={'/About'}>About</Link></li>
            </ul>
        </nav>
    </header>
    


</div>
  )
}

export default Navbar
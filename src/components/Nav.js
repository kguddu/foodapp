import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>

      <div className=' heading'>
        <Link to='/'>
          <img src="https://cdn-icons-png.flaticon.com/512/695/695934.png" alt="logo" className='logo' />
        </Link>
        <h1> Hunger<span>Zone</span></h1>
      </div>
      <div className='nav-links'>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/category'><li>Category</li></Link>
          <Link to='/randommeal'><li>RandomMeal</li></Link>
        </ul>

      </div>
    </div>
  );
}

export default Nav
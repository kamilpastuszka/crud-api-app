import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../assets/cake-logo.jpg';

export const Header = () => {
  return (
      <div className="row header">
        <div className="col-3">
         <span className="logo-image"><img src={logo} alt="cake-logo"/></span>
        </div>
        <div className="col-3">
         <Link to='/cakes/add' className='btn btn-lg btn-primary'>
             Add Cake
        </Link>
       </div>
      </div>
  )
}

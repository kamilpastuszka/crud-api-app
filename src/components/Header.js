import React from 'react'
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
      <div className="row header">
        <div className="col-3">
         <span className="logo-image"></span>
        </div>
        <div className="col-9">
         <Link to='/cakes/add' className='btn btn-lg btn-primary float-right'>
             Add Cake
        </Link>
       </div>
      </div>
  )
}

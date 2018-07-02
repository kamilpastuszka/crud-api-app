import React from 'react'
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3">Logo</div>
        <div className="col-3">
         <Link to='/cakes/add' className='btn btn-primary'>
             Add Cake
        </Link>
       </div>
      </div>
    </div>
  )
}

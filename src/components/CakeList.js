import React from 'react';
import { Link } from 'react-router-dom';

export const CakeList = ({id, imageUrl, name}) => {
  return (
  <div className="col-md-4">
    <div className="thumbnail">
        <Link to={`/${id}`}>
          <img src={imageUrl}/>
        </Link>
      </div>
      <h3>{name}</h3>
    </div>
  )
};
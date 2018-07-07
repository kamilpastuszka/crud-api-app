import React from 'react';
import { Link } from 'react-router-dom';

export const CakeList = ({id, image, name}) => {
  return (
   <div className="cal-lg-4">
      <div className="thumbnail">
        <Link to={`/${id}`}>
          <img src={image}/>
        </Link>
          <div className="caption">
            <h3>{name}</h3>
          </div>
      </div>
    </div>
  )
};

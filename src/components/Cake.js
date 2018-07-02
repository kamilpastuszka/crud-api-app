import React from 'react'

export const Cake = (props) => {
  return (
    <div className="col-md-3">
      <div className="thumbnail">
          <img src={props.image}/>
          <div className="caption">
            <h3>{props.name}</h3>
          </div>
      </div>
      </div>
  )
}

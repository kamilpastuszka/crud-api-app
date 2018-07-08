import React from 'react'

export const CakeForm = (props) => (
    <div>

      <form onSubmit={props.submit}>

      <div className="form-group col-lg-6" >
      <label for="name">Name</label>
      <input type="text" className="form-control" name="name" 
        value={props.name} onChange={props.changed}/>
      </div>

      <div className="form-group col-lg-6">
      <label for="name">Comment</label>
      <textarea row="5" className="form-control" name="comment" value={props.comment} onChange={props.changed}/>
      </div>
    
      <div className="form-group  col-lg-6">
      <label for="name">yumFactor</label>
      <input type="number" className="form-control" name="yumFactor" value={props.yumFactor} onChange={props.changed}/>
      </div>

      <div className="form-group col-lg-6">
      <label for="name">image url</label>
      <input type="text" className="form-control" name="imageUrl"  value={props.imageUrl} onChange={props.changed} id="image" accept="image/png, image/jpeg"/>
      </div>

      <div className="form-group  col-lg-6">
        <button type="submit">submit</button> 
      </div>
      <br/>
    
      </form >
    </div>
    )


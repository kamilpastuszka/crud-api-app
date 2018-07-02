import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <div>
        
          <div>
              <label forHtml="name">Name:</label>
              <input type="text" id="name" name="name"/>
          </div>

          <div>
              <label for="comment"> Comment:</label>
              <input type="text" id="comment" name="comment"/>
          </div>

          <div>
              <label for="yumFactor"> yumFactor:</label>
              <input type="text" id="yumFactor" name="yumFactor"/>
          </div>
      
          <div>
              <label for="cake">Picture:</label>
              <input type="file"
                     id="cake" name="cake"
                     accept="image/png, image/jpeg" />
          </div>

      </div>
    )
  }
}

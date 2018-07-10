import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCake } from '../store/actions/actions';

class SingleView extends Component {
  constructor(props) {
    super(props);
    this.deleteCake = this.deleteCake.bind(this)
  }

  deleteCake () {
    console.log(this.props);
    this.props.onDeleteCake(this.props.cake.id);
    this.props.history.push('/');
  }
  
  render() {
    return (
      <div>
        <div className="well well-lg">
          <h2> {this.props.cake.name} </h2>
          <h4>{this.props.cake.comment}</h4>
          <h4> yumFactor: <a href="#"> <span className="badge">{this.props.cake.yumFactor} </span></a></h4>
      
     
          <img src={this.props.cake.imageUrl}/>
           <br/>
      
           <div className="row">
           <div className="single-view-btn-group">
           <button className="btn btn-lg btn-danger" onClick={this.deleteCake}>Delete</button>
 
           <Link to={`/edit/${this.props.cake.id}`}>
           <button className="btn btn-lg btn-primary">Edit</button>
           </Link>

          <Link to={`/`}>
          <button className="btn btn-lg btn-warning">Cancel</button>
           </Link>  
         </div>   
         </div>  
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    cake: state.cakes.find(({id}) => id === props.match.params.id)
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onDeleteCake: (id) => dispatch(deleteCake(id)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (SingleView);
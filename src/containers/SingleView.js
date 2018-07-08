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
      <h3> {this.props.cake.name} </h3>
      
      <h4> {this.props.cake.comment} </h4>

      <h4> {this.props.cake.yumFactor} </h4>
      
      <img src={this.props.cake.imageUrl}/>

      <button onClick={this.deleteCake}> Delete</button>
      
      <Link to={`/edit/${this.props.cake.id}`}>
      <button> Edit</button>
      </Link>

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
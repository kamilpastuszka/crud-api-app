import React, {Component} from 'react'
import { connect } from 'react-redux';  
import {CakeForm} from '../components/CakeForm';

class EditView extends Component {
    constructor(props) {
    super(props); 
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: "",
      comment: "",
      yumFactor: "",
      imageUrl: "" 
   };
  
 }

    handleChange(e) {   
      this.setState({[e.target.name]: e.target.value}) 
      console.log(this.state);
  }
  render() {

  return (
    <div>
      <div className="col-lg-6">
      <label for="name">Edit Cake</label>
      </div>
  
      {console.log('params',this.props.match.params.id)}
       <CakeForm 
          name={this.state.name ? this.state.name : this.props.cake.name}         
          comment={this.state.comment ? this.state.comment : this.props.cake.comment}
          yumFactor={this.state.yumFactor ? this.state.yumFactor : this.props.cake.yumFactor}
          imageUrl={this.state.imageUrl ? this.state.imageUrl : this.props.cake.imageUrl}
          changed={this.handleChange}
       />
    </div>
  ) 
}
}

const mapStateToProps = (state, props) => {
  return {
    cake: state.cakes.find(({id}) => id === props.match.params.id)
  }
}

export default connect(mapStateToProps) (EditView);
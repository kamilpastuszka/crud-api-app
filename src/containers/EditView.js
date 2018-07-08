import React, {Component} from 'react';
import { connect } from 'react-redux';  
import { CakeForm } from '../components/CakeForm';
import { updateCake } from '../store/actions/actions';
;
class EditView extends Component {
    constructor(props) {
    super(props); 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: this.props.cake.name ? this.props.cake.name : "",
      comment: this.props.cake.comment ? this.props.cake.comment : "",
      yumFactor: this.props.cake.yumFactor ? this.props.cake.yumFactor : "",
      imageUrl: this.props.cake.imageUrl ? this.props.cake.imageUrl : "",
   };
  
 }

  handleChange(e) {   
      this.setState({[e.target.name]: e.target.value}) 
      console.log(this.state);
  }

  handleSubmit() {
    const updatedCake = this.state;
    this.props.onCakeUpdate(this.props.cake.id, updatedCake);
    this.props.history.push('/');
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
          submit={this.handleSubmit}
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

const mapDispatchToProps = dispatch => {
  return {
    onCakeUpdate: (id, cake) => dispatch(updateCake(id, cake))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditView);
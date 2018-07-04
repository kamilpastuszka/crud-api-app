import React, { Component } from 'react';
import '../index.css';
import { CakeList } from '../components/CakeList';
import { Header } from '../components/Header';
import { fetchCakes } from '../store/actions/actions';
import { connect } from 'react-redux';


class MainView extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.onFetchCakes()
  }

  render() {
   const errorMessage = this.props.error;
   console.log(this.props.error);
   console.log(this.props.cakes);
   const itemsArray = this.props.cakes.map((cake) => {
      return (
        <CakeList key={cake.id} image={cake.imageUrl} name={cake.name} />
      )
    });

    return (
      <div>
        <Header/>
          {errorMessage}
          {itemsArray}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cakes: state.cakes,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchCakes: () => dispatch(fetchCakes())
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (MainView);


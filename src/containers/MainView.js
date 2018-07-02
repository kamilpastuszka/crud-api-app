import React, { Component } from 'react';
import '../index.css';
import axios from 'axios';
import { Cake } from '../components/Cake';
import { Header } from '../components/Header';


class MainView extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      error: ""
    }
  }

  componentDidMount() {
    var items = this.state.items;
    axios.get('http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes')
      .then(response => {
        this.setState({ items: response.data });
        console.log(response);
      },
        (error) => {
          let failedRequest = "Error: fetching API data was not successful";
          this.setState({ error: failedRequest });
          console.log(error);
        }
      )
  }

  render() {
   const errorMessage = this.state.error;
   const itemsArray = this.state.items.map((item) => {
      return (
        <Cake key={item.id} image={item.imageUrl} name={item.name} />
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

export default MainView;


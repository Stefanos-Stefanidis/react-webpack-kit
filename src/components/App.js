import React, { Component } from 'react';
import './../scss/style.scss';
import './../css/style.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isLoading: true,
    }

  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(response => {
        console.log(response.data)
        this.setState({
          dataSource: response.data.data,
          isLoading: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return  <h1>LOADING</h1>
    }

    return (
      <div>
        <h1>hey there! </h1>
      </div>
    );
  }
}

export default App;

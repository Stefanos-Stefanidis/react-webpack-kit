import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../scss/style.scss';
import './../css/style.css';
import axios from 'axios';
import StepWizard from 'react-step-wizard';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Container from 'react-bootstrap/Container';
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
          form: {},
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  updateForm = (key, value) => {
    const { form } = this.state;
    console.log(this.state);
    form[key] = value;
    this.setState({ form });
  }

  onStepChange = (stats) => {

    console.log(stats);
  }
  render() {
    if (this.state.isLoading) {
      return  <h1>LOADING</h1>
    }

    return (
      <div>
        <Container>
          <StepWizard  onStepChange={this.onStepChange}>
            <Step1 hashKey={'FirstStep'} update={this.updateForm} />
            <Step2 />
            <Step3 />
          </StepWizard>
        </Container>
      </div>
    );
  }
}

export default App;

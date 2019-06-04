import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }

    update(e) {
        document.getElementById('lights').innerHTML = e.target.value;
    }
    render() {
        return (
            <div>
                <h2>Step {this.props.currentStep}</h2>
                <p>Total Steps: {this.props.totalSteps}</p>
                <input type="number" onChange={this.update}/>
                <div className="text-center">
                    <Button variant="contained" color="primary" onClick={this.props.previousStep}>Previous Step</Button>
                    <Button variant="contained" color="secondary" onClick={this.props.nextStep}>Next Step</Button>
                </div>   
            </div>
        )
    }
}

export default Step1

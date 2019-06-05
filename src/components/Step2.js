import React, { Component } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Button from '@material-ui/core/Button';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lightsArr: []
        }
    
    }

    change = (e) => {
        this.setState({
            lightsArr: e,
        });
       
        document.getElementById('green').innerHTML = e[0];
        document.getElementById('yellow').innerHTML = e[1];
        document.getElementById('red').innerHTML = e[2];

    }

    createRange = () => {
        let table = []
        let numOfLights = 0;
        if (document.getElementById('lights') != null) {
            numOfLights = document.getElementById('lights').innerText;
            
        }
        console.log('numOfLights:', numOfLights)
        // Outer loop to create parent
        for (let i = 0; i < numOfLights; i++) {

          table.push(<Range key={i} pushable defaultValue={[40,70,100]} count={3} onChange={this.change}
            trackStyle={[{ backgroundColor: 'yellow' }, { backgroundColor: 'red' }]}
            handleStyle={[{ backgroundColor: 'green' }, { backgroundColor: 'yellow' }, { backgroundColor: 'red' }]}
            railStyle={{ backgroundColor: 'green' }}
            tipFormatter={value => `${value}`}
            />)
        }
        return table
    }

    render() {
        return (
            <div>
                <h2>Step {this.props.currentStep}</h2>
                <p>Total Steps: {this.props.totalSteps}</p>
                <h1>Number Of lights <span id="lights"></span></h1>
                {this.createRange()}
                <div className="text-right">
                    <Button variant="contained" color="primary" onClick={this.props.previousStep}>Previous Step</Button>
                    <Button variant="contained" color="secondary" onClick={this.props.nextStep}>Next Step</Button>
                </div>                       
            </div>
        )
    }
}

export default Step2

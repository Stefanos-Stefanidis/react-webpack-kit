import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import FileSaver from 'file-saver';

export class Step3 extends Component {

    constructor(props){
        super(props)
        this.fileSaveChanges = this.fileSaveChanges.bind(this);
        this.state = {
        
        }
    }

    fileSaveChanges(){
        let jsonFile = []; 
        jsonFile.push(document.getElementById('green').innerHTML);
        jsonFile.push(document.getElementById('yellow').innerHTML);
        jsonFile.push(document.getElementById('red').innerHTML);
        var jsonString = JSON.stringify(jsonFile);

        var blob = new Blob([jsonString], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, `changes for test.json`);
    }
    update2 = () => {
        console.log(this.state.lightsArr);
        console.log('test');
    }
    render() {
        return (
            <div>
                <h2>Step {this.props.currentStep}</h2>
                <input type="number" onChange={this.update2}/>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Green</th>
                            <th>Yellow</th>
                            <th>Red</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td id="green"></td>
                            <td id="yellow"></td>
                            <td id="red"></td>
                        </tr>
                    </tbody>
                </Table>                
                <div className="text-center">
                    <Button variant="dark" onClick={this.props.previousStep}>Previous Step</Button>
                    <Button variant="primary" onClick={this.props.nextStep}>Next Step</Button>
                    <Button variant="success" onClick={() =>{this.fileSaveChanges('something')}}>Save</Button>
                </div>                
            </div>
        )
    }
}

export default Step3

import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import FileSaver from 'file-saver';
import Button from '@material-ui/core/Button';

export class Step3 extends Component {

    constructor(props){
        super(props)
        this.fileSaveChanges = this.fileSaveChanges.bind(this);
        this.state = {
        
        }
    }

    fileSaveChanges(){
        let jsonFile = {}; 
        jsonFile[0] = document.getElementById('green').innerHTML;
        jsonFile[1] = document.getElementById('yellow').innerHTML;
        jsonFile[2] = document.getElementById('red').innerHTML;
        var jsonString = JSON.stringify(jsonFile);

        var blob = new Blob([jsonString], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, `changes for test.json`);
    }

    render() {
        return (
            <div>
                <h2>Step {this.props.currentStep}</h2>
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
                <div className="text-right">
                    <Button variant="contained" color="primary" onClick={this.props.previousStep}>Previous Step</Button>
                    <Button variant="contained" color="secondary" onClick={this.props.nextStep}>Next Step</Button>
                    <Button vvariant="outlined" href="#outlined-buttons" onClick={() =>{this.fileSaveChanges('something')}}>Save</Button>
                </div>                
            </div>
        )
    }
}

export default Step3

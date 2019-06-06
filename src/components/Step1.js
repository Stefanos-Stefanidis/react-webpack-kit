import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


class Step1 extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          sectors: ['Sector 1', 'Sector 2', 'Sector 3'],
          sector: '',
        };
    }
    update(e) {
        document.getElementById('lights').innerHTML = e.target.value;
    }
    addNew = (e) => {
        this.setState({ sectors: [...this.state.sectors, this.state.sector] })
    }
    sector= (e) => {
        this.setState({ sector: e.target.value })
    }

    getList= (item) => {
        console.log(item);
    }


    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h2>Step {this.props.currentStep}</h2>
                        <p>Total Steps: {this.props.totalSteps}</p>
                        <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue="1"
                            margin="normal"
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            required
                            label="Add New"
                            defaultValue={this.state.sector}
                            margin="normal"
                            onChange={this.sector}
                        />
                        <Fab color="primary" aria-label="Add">
                            <AddIcon onClick={this.addNew} />
                        </Fab>                        
                        <List component="nav" aria-label="Main mailbox folders">
                            {this.state.sectors.map(item => (
                                <ListItem button>
                                    <ListItemText key={item} primary={item} onClick={this.getList.bind(this, item)} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={this.props.previousStep}>Previous Step</Button>
                        <Button variant="contained" color="secondary" onClick={this.props.nextStep}>Next Step</Button>
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default Step1;
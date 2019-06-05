import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../scss/style.scss';
import './../css/style.css';
import axios from 'axios';
import StepWizard from 'react-step-wizard';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Navigator from './Navigator';
import Header from './Header';
import Container from '@material-ui/core/Container';

let theme = createMuiTheme({
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    ...theme.mixins,
    toolbar: {
      minHeight: 48,
    },
  },
};

const drawerWidth = 256;

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
    padding: '48px 36px 0',
    background: '#eee',
  },
  container:{
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
  }
};

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

  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  render() {
    if (this.state.isLoading) {
      return  <h1>LOADING</h1>
    }
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <nav className={classes.drawer}>
            <Hidden smUp implementation="js">
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
              />
            </Hidden>
            <Hidden xsDown implementation="css">
              <Navigator PaperProps={{ style: { width: drawerWidth } }} />
            </Hidden>
          </nav>
          <div className={classes.appContent}>
            <Header onDrawerToggle={this.handleDrawerToggle} />
            <main className={classes.mainContent}>
            <Container fixed className={classes.container}>
            <StepWizard  onStepChange={this.onStepChange}>
              <Step1 hashKey={'FirstStep'} update={this.updateForm} />
              <Step2 />
              <Step3 />
            </StepWizard>
            </Container>
            </main>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

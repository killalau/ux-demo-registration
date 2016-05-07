/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import * as React from 'react';
import * as MaterialUi from 'material-ui';
import * as Styles from 'material-ui/styles';
import * as SvgIconSet from 'material-ui/svg-icons';
import ProgressBackground from './ProgressBackground';
import Step from './Step';

const {RaisedButton, Paper, FlatButton, IconButton, TextField} = MaterialUi
const {getMuiTheme, MuiThemeProvider, colors:{deepOrange500}} = Styles;
const {ActionInfo} = SvgIconSet;

const muiTheme = getMuiTheme({});

interface AppProps {}

interface AppState extends AppProps {
    progress: number,
}

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200,
    },
    form:{
        width: 600,
        height: 150,
        padding: 10,
        marginTop: 0,
        marginBotton: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    registerButton: {
        marginTop: 30,
    },
    textfield: {
        width: 500,
    },
    text: {
        paddingTop: 10,
    }
};

class Main extends React.Component<AppProps, AppState> {

    constructor(props, context) {
        super(props, context);
        this.handleRegisterTouchTap = this.handleRegisterTouchTap.bind(this);
        this.handleEmailKeyDown = this.handleEmailKeyDown.bind(this);
        this.handleUsernameKeyDown = this.handleUsernameKeyDown.bind(this);
        this.handlePasswordKeyDown = this.handlePasswordKeyDown.bind(this);

        this.state = {
            progress: 0,
        };
    }

    handleRegisterTouchTap(){
        let state = Object.assign({}, this.state);
        state.progress++;
        this.setState(state);
    }

    handleEmailKeyDown(event) {
        if(event.keyCode === 13){
            let state = Object.assign({}, this.state);
            state.progress++;
            this.setState(state);
        }
    }

    handleUsernameKeyDown(event) {
        if(event.keyCode === 13){
            let state = Object.assign({}, this.state);
            state.progress++;
            this.setState(state);
        }
    }

    handlePasswordKeyDown(event) {
        if(event.keyCode === 13){
            let state = Object.assign({}, this.state);
            state.progress++;
            this.setState(state);
        }
    }

    render() {
        let steps = [
            <Step
                key={0}
                step={0}
                currentStep={this.state.progress}
            >
                <RaisedButton
                    style={styles.registerButton}
                    label="Register"
                    primary={true}
                    onTouchTap={this.handleRegisterTouchTap}
                />
            </Step>,
            <Step
                key={1}
                step={1}
                currentStep={this.state.progress}
                autoFocusSelector="input"
            >
                <TextField
                    style={styles.textfield}
                    floatingLabelText="Email"
                    hintText="Choose a Email for login and receive notifications."
                    onKeyDown={this.handleEmailKeyDown}
                />
            </Step>,
            <Step
                key={2}
                step={2}
                currentStep={this.state.progress}
                autoFocusSelector="input"
            >
                <TextField
                    style={styles.textfield}
                    floatingLabelText="Name"
                    hintText="How should people call you?"
                    onKeyDown={this.handleUsernameKeyDown}
                />
            </Step>,
            <Step
                key={3}
                step={3}
                currentStep={this.state.progress}
                autoFocusSelector="input"
            >
                <TextField
                    style={styles.textfield}
                    floatingLabelText="Password"
                    hintText="Password should always keep secret."
                    type="password"
                    onKeyDown={this.handlePasswordKeyDown}
                />
            </Step>,
            <Step
                key={4}
                step={4}
                currentStep={this.state.progress}
            >
                <div style={styles.text}>
                    <h2>Welcome, you have register successfully!</h2>
                </div>
            </Step>
        ];

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <ProgressBackground progress={this.state.progress / (steps.length - 1)} />
                    <div style={styles.container}>
                        <Paper style={styles.form} zDepth={1} className="clearfix">
                            <h1>UX Demo for User Registration</h1>
                            {steps}
                        </Paper>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;

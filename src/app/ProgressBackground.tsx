import * as React from 'react';
import {Motion, spring} from 'react-motion';
import  muiThemeable from 'material-ui/styles/muiThemeable';

interface ProgressBackgroundProps {
    progress: number,
}

class ProgressBackground extends React.Component<ProgressBackgroundProps, ProgressBackgroundProps> {
    render() {
        return (
            <Motion style={{w: spring(parseInt(this.props.progress * 100))}}>
                {({w}) =>
                    <div className="progress-background" style={{
                        background: this.props.muiTheme.palette.primary1Color,
                        width:  w + 'vw',
                    }}></div> 
                }
            </Motion>
        );
    }
}

export default muiThemeable()(ProgressBackground);

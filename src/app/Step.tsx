import * as React from 'react';

interface StepProps {
    step: number,
    currentStep: number,
    autoFocusSelector?: string,
}

class Step extends React.Component<StepProps, StepProps> {
    render() {
        return (
            this.props.step === this.props.currentStep ?
                (
                    <span ref="container">{this.props.children}</span>
                ) : null
        );
    }

    componentDidUpdate() {
        if(this.props.autoFocusSelector && this.refs.container){
            var container = this.refs.container;
            var element = container.querySelector(this.props.autoFocusSelector);
            element && element.focus();
        }
    }
}

export default Step;

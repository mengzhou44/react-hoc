import React, { Component } from "react";
import withTracker from './hoc/with-tracker';

class Button extends Component {

    render() {
        return <button> Click Me </button>;
    }
}

export default withTracker(Button);
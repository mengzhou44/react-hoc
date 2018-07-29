import React, { Component } from "react";

const withTracker = function (WrappedComponent) {

    return class extends Component {

        componentWillMount() {
            this.setState({ startTime: Date.now() });
            console.log("componenetWillMount");
        }

        componentDidMount() {
            console.log("componenetDidMount");
            console.log(`${WrappedComponent.name} TOTAL TIME ${Date.now() - this.state.startTime}`);
        }

        render() {
            return <WrappedComponent  {...this.props} />;
        }

    }

}

export default withTracker;

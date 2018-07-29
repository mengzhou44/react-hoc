import React, { Component } from "react";

import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";

const requireSignIn = function (WrappedComponent) {

    const hoc = class extends Component {

        componentWillMount() {
            if (!this.props.authenticated) {
                this.props.history.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (!this.props.authenticated) {
                this.props.history.push('/');
            }
        }

        render() {
            return <WrappedComponent  {...this.props} />;
        }

    }

    function mapStateToProps({ authenticated }) {
        return {
            authenticated
        };
    }

    return connect(mapStateToProps, null)(withRouter(hoc));
}

export default requireSignIn;

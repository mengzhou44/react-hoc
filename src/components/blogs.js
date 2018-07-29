import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../actions";


class Blogs extends Component {
    render() {
        return (<div>
            <h2>Blogs! </h2>
            <button onClick={() => this.props.signOut(this.props.history)} > Sign Out </button>
        </div>);
    }
}

export default connect(null, actions)(withRouter(Blogs));
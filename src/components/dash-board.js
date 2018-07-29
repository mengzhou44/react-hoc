import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../actions";

import loadContent from '../utils/load-content';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: []
        }
    }

    componentDidMount() {

        this.setState({
            loading: true
        });

        setTimeout(() => {

            this.setState({
                loading: false,
                data: ['book1', 'book2', 'book3']
            });

        }, 1000);

    }

    renderContent() {
        return (
            <div>
                <ul>
                    {this.state.data.map(item => {
                        return <li key={item}> item </li>
                    })}
                </ul>

                <button onClick={() => {
                    this.props.signIn(this.props.history);
                }} > Sign In </button>
            </div>

        );

    }
    render() {
        return loadContent(this.state.loading, this.renderContent());
    }
}


export default connect(null, actions)(withRouter(Dashboard));
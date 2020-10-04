import React, { Component } from 'react';
import './jumbotron.css';

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">{this.props.name}</h1>
                </div>
            </div>
        )
    }
}

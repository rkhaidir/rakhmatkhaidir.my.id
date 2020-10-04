import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div id="nav-bar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to={'/'}>Rakhmat Khaidir</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/portfolio'}>PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/blog'}>BLOG</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/about'}>ABOUT</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

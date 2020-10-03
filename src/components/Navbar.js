import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div id="nav-bar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">Rakhmat Khaidir</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PORTFOLIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

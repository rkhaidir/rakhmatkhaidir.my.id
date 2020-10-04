import React from 'react';
import './banner.css';

export default function Banner() {
    return (
        <div id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="banner-title">I'AM A WEB DEVELOPER</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis officiis ullam unde modi vitae maiores quae sed obcaecati perferendis libero.</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="./img/banner-2.png" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <img src="./img/wave.png" alt="" className="bottom-img"/>
        </div>
    )
}

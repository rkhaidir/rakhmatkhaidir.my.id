import React from 'react';
import './service.css';

export default function Service() {
    return (
        <section id="service">
            <div className="container">
                <h1 className="title text-center">SERVICES</h1>
                <div className="row text-center">
                    <div className="col-md-6 services">
                        <img src="./img/coding.png" alt="" className="service-img"/>
                        <h4>Web Programming</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum distinctio, placeat repellat porro dicta laudantium.</p>
                    </div>
                    <div className="col-md-6 services">
                        <img src="./img/designer.png" alt="" className="service-img"/>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum distinctio, placeat repellat porro dicta laudantium.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

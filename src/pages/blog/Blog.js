import React, { Component } from 'react';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Footer from '../../components/footer/Footer';
import './blog.css';

export default class Blog extends Component {
    render() {
        return (
            <section>
                <Jumbotron name="BLOG" />
                <section id="blog-section">
                    <div className="container">
                        
                        <div className="card shadow my-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="./img/blog.jpg" alt=""/>
                                    </div>
                                    <div className="col-md-10">
                                        <h4>Lorem ipsum dolor sit amet.</h4>
                                        <p>Jun 16, 2020</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio adipisci libero nisi a eligendi porro, suscipit repellat, dolorem illum ab labore earum laborum eius ratione quia blanditiis aliquam? Magni?</p>
                                        <button className="btn btn-sm btn-primary">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow my-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="./img/blog.jpg" alt=""/>
                                    </div>
                                    <div className="col-md-10">
                                        <h4>Lorem ipsum dolor sit amet.</h4>
                                        <p>Jun 16, 2020</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio adipisci libero nisi a eligendi porro, suscipit repellat, dolorem illum ab labore earum laborum eius ratione quia blanditiis aliquam? Magni?</p>
                                        <button className="btn btn-sm btn-primary">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </section>
                <Footer/>
            </section>
        )
    }
}

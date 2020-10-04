import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './blog.css';

export default class Blog extends Component {
    render() {
        return (
            <section id="blog">
            <div className="container text-center">
                <h1 className="title">BLOG</h1>
                <div className="row offset-1">
                    <div className="col-md-4 blog">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, enim amet distinctio perferendis rerum rem quos corrupti dolorem, quaerat velit ex perspiciatis quod reprehenderit voluptatum possimus consectetur iure, neque reiciendis.</p>
                        <img src="/img/blog.jpg" alt=""/>
                        <p className="blog-title"><b>Lorem ipsum dolor sit.</b> <br/> Jul 16, 2020</p>
                    </div>
                    <div className="col-md-4 blog">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ex dolorum molestias libero animi beatae....</p>
                        <img src="/img/blog.jpg" alt=""/>
                        <p className="blog-title"><b>Lorem ipsum dolor sit.</b> <br/> Sep 16, 2020</p>
                    </div>
                    <div className="col-md-4 blog">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ex dolorum molestias libero animi beatae....</p>
                        <img src="/img/blog.jpg" alt=""/>
                        <p className="blog-title"><b>Lorem ipsum dolor sit.</b> <br/> Okt 2, 2020</p>
                    </div>
                </div>
                <Link className="btn btn-primary" to={'/blog'}>All Blog</Link>
            </div>
        </section>
        )
    }
}

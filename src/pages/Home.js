import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Service from '../components/Service';
import Blog from '../components/Blog';
import Sosmed from '../components/Sosmed';
import Footer from '../components/Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Banner/>
                <Service/>
                <Blog/>
                <Sosmed/>
                <Footer/>
            </div>
        )
    }
}

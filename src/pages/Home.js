import React, { Component } from 'react';
import Banner from '../components/banner/Banner';
import Service from '../components/service/Service';
import Blog from '../components/blog/Blog';
import Sosmed from '../components/sosmed/Sosmed';
import Footer from '../components/footer/Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Service/>
                <Blog/>
                <Sosmed/>
                <Footer/>
            </div>
        )
    }
}

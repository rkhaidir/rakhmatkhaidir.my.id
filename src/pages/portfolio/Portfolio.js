import React, { Component } from 'react';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Footer from '../../components/footer/Footer';

export default class Portfolio extends Component {
    render() {
        return (
            <section>
                <Jumbotron name="PORTFOLIO"/>
                <div className="my-5">

                </div>
                <Footer/>
            </section>
        )
    }
}

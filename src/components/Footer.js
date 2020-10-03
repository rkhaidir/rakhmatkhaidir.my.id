import React from 'react'

export default function Footer() {
    return (
        <footer>
            <img src="/img/wave2.png" alt="" className="footer-img"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-box">
                        <h4>Rakhmat Khaidir</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, enim amet distinctio perferendis rerum rem quos corrupti dolorem, quaerat velit ex perspiciatis quod reprehenderit voluptatum possimus consectetur iure, neque reiciendis.</p>
                    </div>
                    <div className="col-md-4 footer-box">
                        <p><b>Contact Us</b></p>
                        <p><i className="fa fa-map-marker"></i> Banjarmasin, Indonesia</p>
                        <p><i className="fa fa-phone"></i> +62 896 2049 6618</p>
                        <p><i className="fa fa-envelope"></i> hallo@rakhmatkhaidir.my.id</p>
                    </div>
                    <div className="col-md-4 footer-box">
                        <p><b>SUBSCRIBE NEWSLETTER</b></p>
                        <input type="email" className="form-control" placeholder="Your Email"/>
                        <button type="button" className="btn btn-primary">Subcribe</button>
                    </div>
                </div>
                <hr/>
                <p className="copyright">Website Created by Rakhmat Khaidir</p>
            </div>
        </footer>
    )
}

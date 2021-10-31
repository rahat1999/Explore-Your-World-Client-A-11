import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <div>
            <footer className="page-footer font-small bg-dark text-white pt-4 foot border ">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Explore Your World</h5>
                            <p>
                                Licence : #HS8934PVT
                                <br />
                                Address :
                                <br />
                                <i className="fas fa-map-marker-alt"></i> All Over World</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">About</h5>
                            <ul className="list-unstyled text-white">
                                <li><a href="/about">About Us</a></li>
                                <li><a href="#!">Terms & Conditions</a></li>
                                <li><a href="#!">Privacy policy</a></li>
                                <li><a href="#!">Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Flow Us On</h5>
                            <ul className="list-unstyled text-white">

                                <li><a className="anchore" href="#!"><i className="fab fa-facebook-square"></i></a></li>
                                <li><a className="anchore" href="#!"><i className="fab fa-instagram-square"></i></a></li>
                                <li><a className="anchore" href="#!"><i className="fab fa-twitter-square"></i></a></li>
                                <li><a className="anchore" href="#!"><i className="fab fa-youtube-square"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3 copy">Copyright <span className='text-primary'>Explore Your World</span> By  © 2021
                </div>

            </footer>
        </div>
    );
};

export default Footer;
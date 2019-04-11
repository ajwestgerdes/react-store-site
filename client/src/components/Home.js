import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <body>
                <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#brand">Brands</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <a class="navbar-brand mx-auto nav-logo" href="#top">Shoe Store</a>
                        <ul class="form-inline ml-auto my-2 my-lg-0">
                            <i class="fas fa-user-plus"></i>
                            <Link to={'./signup'}>
                                <button class="btn btn-dark my-2 my-sm-0" variant="raised" id="signup-btn" type="submit">Sign Up</button>
                            </Link>
                        </ul>
                    </div>
                </nav>
                <header class="mainheader">

                </header>
                <section id="about">
                    <div class="info-container row">
                        <div class="col-md-6">
                            <img src={require('../assets/images/shoeMain.jpg')} class="img-fluid rounded-circle info-img" alt="" />
                        </div>
                        <div class="col-md-6 text-center">
                            <h4>About Us</h4>
                            <p class="text-muted">We are shoe store here is a little about us</p>
                        </div>
                    </div>
                </section>
                <hr class="divider my-4" />
                <section id="brand">
                    <div class="info-container row">
                        <div class="col-md-6 info">
                            <h4>Brands We Carry</h4>
                            <p class="text-muted">Here are some of the brands we carry in our store</p>
                        </div>
                        <div class="col-md-6">
                            <img src={require('../assets/images/shoeMain.jpg')} class="img-fluid rounded-circle info-img" alt="" />
                        </div>
                    </div>
                </section>
                <section class="page-section contact-container" id="contact">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 text-center">
                                <h2 class="mt-0">Contact Us</h2>
                                <hr class="divider my-4" />
                                <p class="text-muted mb-5">

                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 ml-auto text-center">
                                <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
                                <div>+1 (222) 333-4444</div>
                            </div>
                            <div class="col-lg-4 mr-auto text-center">
                                <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                                <a class="d-block" href="#email">shoes@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </section>
            </body>


        )
    }
}

//proptypes

export default Home;

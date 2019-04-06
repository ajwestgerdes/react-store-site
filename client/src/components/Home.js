import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <body>
                <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Womens</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Mens</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Brands</a>
                            </li>
                        </ul>
                        <a class="navbar-brand mx-auto" href="#">Shoe Store</a>
                        <ul class="form-inline ml-auto my-2 my-lg-0">
                            <i class="fas fa-user-plus"></i>
                            <button class="btn btn-dark my-2 my-sm-0" id="signup-btn" type="submit">Sign Up</button>
                        </ul>
                    </div>
                </nav>
                <header class="mainheader">

                </header>
                <section id="projects">
                    <div class="container-fluid">
                        <div class="row align-items-center justify-content-center">
                            <div class="card row-sm-6">
                                <img class="card-img-top" src="../assets/images/pepeHands.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                                    <a href="#" class="btn card-btn-color text-white">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card row-sm-6">
                                <img class="card-img-top" src="../assets/images/pepeHands.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                                    <a href="#" class="btn card-btn-color text-white">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card row-sm-6">
                                <img class="card-img-top" src="../assets/images/pepeHands.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                                    <a href="#" class="btn card-btn-color text-white">Go somewhere</a>
                                </div>
                            </div>
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
                                <a class="d-block">shoes@gmail.com</a>
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

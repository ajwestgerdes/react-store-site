import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderNav extends Component {
    render() {
        return (
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
                        <button class="btn btn-dark my-2 my-sm-0" type="submit">Sign Up</button>
                        <i class="fas fa-sign-in-alt"></i>
                        <button class="btn btn-dark my-2 my-sm-0" type="submit">Login</button>

                    </ul>
                </div>
            </nav>

        )
    }
}

//proptypes

export default HeaderNav;

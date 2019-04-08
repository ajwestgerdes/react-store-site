import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Signup extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card card-signin my-5">
                            <div class="card-body">
                                <h5 class="card-title text-center">Sign Up For Our Newsletter</h5>
                                <form class="form-signin">
                                    <div class="form-label-group">
                                        <input type="text" id="input-user" class="form-control" placeholder="First Name" required autofocus />
                                        <label for="inputUser">First Name</label>
                                    </div>

                                    <div class="form-label-group">
                                        <input type="text" id="input-pass" class="form-control" placeholder="Last Name" required />
                                        <label for="inputPass">Last Name</label>
                                    </div>

                                    <div class="form-label-group">
                                        <input type="text" id="input-pass" class="form-control" placeholder="Email" required />
                                        <label for="inputPass">Email</label>
                                    </div>
                                    <Link to={"/"}>
                                        <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign Up</button>
                                    </Link>
                                    <hr class="my-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup

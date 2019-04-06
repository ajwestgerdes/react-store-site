import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
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
        )
    }
}

export default Contact

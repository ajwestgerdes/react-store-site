import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <section class="page-section contact-container" id="contact">
                    <hr class="divider divider-pad my-4" />
                    <div class="row">
                        <div class="col-lg-4 ml-auto text-center">
                            <div>+1 (222) 333-4444</div>
                        </div>
                        <div class="col-lg-4 mr-auto text-center">
                            <a class="d-block">shoes@gmail.com</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact

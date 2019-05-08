import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <section className="page-section contact-container" id="contact">
                    <hr className="divider divider-pad my-4" />
                    <div className="text-center">Store Hours</div>
                    <div className="text-center">Monday - Sunday</div>
                    <div className="text-center">9:30AM - 6:00PM</div>
                    <div className="row">
                        <div className="col-lg-4 ml-auto text-center">
                            <div>+1 (222) 333-4444</div>
                        </div>
                        <div className="col-lg-4 mr-auto text-center">
                            <div className="d-block">shoes@gmail.com</div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact

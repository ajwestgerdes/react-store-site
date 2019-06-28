import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <section className="page-section contact-container" id="contact">
                    <hr className="divider divider-pad my-4" />
                    <div className="text-center">Store Hours</div>
                    <div className="text-center">Monday - Saturday</div>
                    <div className="text-center">9:30AM - 6:00PM</div>
                    <div className="row">
                        <div className="col-lg-3 ml-auto text-center">
                            <iframe className="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.498959103403!2d-84.23470688430639!3d39.81822939974368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88408035fab96965%3A0xd3072afc05e4c271!2s5500+N+Main+St%2C+Dayton%2C+OH+45415!5e0!3m2!1sen!2sus!4v1561688840373!5m2!1sen!2sus"></iframe>
                            <a href="https://www.google.com/maps?ll=39.818225,-84.232518&z=15&t=m&hl=en&gl=US&mapclient=embed&q=5500+N+Main+St+Dayton,+OH+45415">5500 North Main Street, Dayton OH 45415</a>
                        </div>
                        <div className="col-lg-3 ml-auto text-center">
                            <div>937-275-4911</div>
                        </div>
                        <div className="col-lg-3 mr-auto text-center">
                            <div className="d-block">shoes@gmail.com</div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default Contact

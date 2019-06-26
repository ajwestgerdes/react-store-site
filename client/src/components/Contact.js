import React, { Component } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function GMap() {
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 45, lng: -75 }}
    />
}

const WrappedMap = withScriptjs(withGoogleMap(GMap));

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
                        <div className="col-lg-4 ml-auto text-center">
                            <div>937-275-4911</div>
                        </div>
                        <div className="col-lg-4 mr-auto text-center">
                            <div className="d-block">shoes@gmail.com</div>
                        </div>
                        <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"} />
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact

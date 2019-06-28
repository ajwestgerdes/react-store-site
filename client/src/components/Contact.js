import React, { Component } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

const WrappedMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 39.818270, lng: -84.232538 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 39.818270, lng: -84.232538 }} />}
    </GoogleMap>
))

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
                            <WrappedMap isMarkerShown
                                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD5H7UUEe1cnSKK6lukPa9Fsr95Lq0oRW8"
                                loadingElement={<div style={{ height: `50%` }} />}
                                containerElement={<div style={{ height: `300px` }} />}
                                mapElement={<div style={{ height: `100%` }} />} />
                        </div>
                        <div className="col-lg-3 ml-auto text-center">
                            <div>937-275-4911</div>
                        </div>
                        <div className="col-lg-3 mr-auto text-center">
                            <div className="d-block">shoes@gmail.com</div>
                        </div>
                        <div style={{ width: "100vw", height: "100v" }}>

                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default Contact

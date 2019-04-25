import React, { Component } from 'react'

export class Brands extends Component {
    render() {
        return (
            <div>
                <div class="row justify-content-md-center logo-container">
                    <img src={require('../assets/images/nb_logo.PNG')} alt="..." class="logo-img rounded-circle"></img>
                    <img src={require('../assets/images/clarks_logo.PNG')} alt="..." class="logo-img rounded-circle"></img>
                    <img src={require('../assets/images/birk_logo.PNG')} alt="..." class="logo-img rounded-circle"></img>
                    <img src={require('../assets/images/sas_logo.PNG')} alt="..." class="logo-img rounded-circle"></img>
                    <img src={require('../assets/images/dan_logo.PNG')} alt="..." class="logo-img rounded-circle"></img>
                </div >
                <div id="brands" class="brand-container">
                    <div class="row">
                        <div class="about-text col-6 col-md-6">
                            <h1 class="text-center" >Women's Brands</h1>
                            <p class="text-center">Here are the womens brands we have</p>
                        </div>
                        <div class="about-text col-6 col-md-6">
                            <h1 class="text-center" >Mens Brands</h1>
                            <p class="text-center">Here are the mens brands we have</p>
                        </div>
                        <div class="about-text col-6 col-md-6">
                            <h1 class="text-center" >Kids Brands</h1>
                            <p class="text-center">Here are the kids brands we have</p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Brands

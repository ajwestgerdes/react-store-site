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
                <div id="brands" class="container">
                    <div class="row justify-content-around">
                        <div class="card about-text col-3 col-md-3">
                            <div class="card-body">
                                <h5 class="card-title">Women's Brands</h5>

                                <ul class="list-unstyled">
                                    <li class="list-group-item">Clark</li>
                                    <li class="list-group-item">Rockport</li>
                                    <li class="list-group-item">Finn Comfort</li>
                                    <li class="list-group-item">Taos</li>
                                    <li class="list-group-item">Birkenstock</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card about-text col-3 col-md-3">
                            <div class="card-body alt-list-group">
                                <ul class="list-unstyled">
                                    <li class="list-group-item">Joya</li>
                                    <li class="list-group-item">Drew</li>
                                    <li class="list-group-item">SAS</li>
                                    <li class="list-group-item">Romika</li>
                                    <li class="list-group-item">Dansko</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card about-text col-3 col-md-3">
                            <div class="card-body">
                                <h5 class="card-title">Men's Brands</h5>
                                <ul class="list-unstyled">
                                    <li class="list-group-item">New Balance <img src={require('../assets/images/nb_logo.PNG')} alt="..." class="list-img rounded-circle"></img></li>
                                    <li class="list-group-item">Rockport<img src={require('../assets/images/dan_logo.PNG')} alt="..." class="list-img ml-auto rounded-circle"></img></li>
                                    <li class="list-group-item">Timberland</li>
                                    <li class="list-group-item">Dunham</li>
                                    <li class="list-group-item">Oboz</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card about-text col-3 col-md-3">
                            <div class="card-body alt-list-group">
                                <ul class="list-unstyled">
                                    <li class="list-group-item">Clark</li>
                                    <li class="list-group-item">Hoka</li>
                                    <li class="list-group-item">Joseph Seibel</li>
                                    <li class="list-group-item">Teva</li>
                                    <li class="list-group-item">Joya</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="brands" class="container">
                    <div class="row justify-content-around">
                        <div class="card about-text col-3 col-md-3">
                            <div class="card-body">
                                <h5 class="card-title">Kid's Brands</h5>
                                <ul class="list-unstyled">
                                    <li class="list-group-item">New Balance</li>
                                    <li class="list-group-item">Sketchers</li>
                                    <li class="list-group-item">Stride Rite</li>
                                    <li class="list-group-item">Tsukihoshi</li>
                                    <li class="list-group-item">Merrell</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card about-text col-3 col-md-3">
                            <div class="card-body alt-list-group">
                                <ul class="list-unstyled">
                                    <li class="list-group-item">Saucony</li>
                                    <li class="list-group-item">Kamik</li>
                                    <li class="list-group-item">Emu</li>
                                    <li class="list-group-item">Timberland</li>
                                    <li class="list-group-item">Saltwater Sandles</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card about-text col-3 col-md-3">
                            <div class="card-body">
                                <h5 class="card-title">Orthotic Brands</h5>

                                <ul class="list-unstyled">
                                    <li class="list-group-item">Powerstep</li>
                                    <li class="list-group-item">Dedag</li>
                                    <li class="list-group-item">New Balance</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card about-text col-3 col-md-3">
                            <div class="card-body alt-list-group">
                                <ul class="list-unstyled">
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}

export default Brands

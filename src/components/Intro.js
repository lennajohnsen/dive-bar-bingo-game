import React, { Component } from 'react';
import beerClink from '../assets/favicon-16x16.png';

export default class Intro extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: true } ;
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose = () => {
        this.setState({ visible: !this.state.visible })
        // console.log(this.state.visible)
    }

    render() {
        return (
            <div  className={'modalDialog' + (this.state.visible ? "" : "invisible")} >
                <div className="modal-content"> 
                    <div className="modal-header">
                            RULES AND REGULATIONS
                    </div>

                    <div className="modal-text">
                    Lorem ipsum dolor amet plaid vegan cray organic, keffiyeh pug meditation. 
                    Retro vice man braid bicycle rights vape wolf helvetica +1 crucifix sustainable flexitarian. 
                    Meh letterpress pickled poke pour-over adaptogen unicorn literally 3 wolf moon kale chips kogi 
                    stumptown heirloom bushwick. Cliche vegan trust fund, ramps street art banh mi cray raw denim 
                    semiotics actually craft beer celiac. <br>
                    
                    </br><br>
                    </br> Venmo portland keffiyeh keytar lumbersexual art party subway tile schlitz godard brunch tbh deep 
                    v taiyaki. Organic migas live-edge keffiyeh kitsch hexagon. Single-origin coffee listicle meditation 
                    shoreditch hoodie freegan. Glossier ethical pork belly post-ironic try-hard.
                    </div>

                    <div className="modal-footer" onClick = {this.handleClose} >
                        <img src={beerClink} alt="beer" className="beer-icon"/>
                        Yes, I am over 21
                    </div>

                </div>
            </div>
        )
    }
}

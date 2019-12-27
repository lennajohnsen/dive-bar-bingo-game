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
                            ABOUT THIS GAME
                    </div>

                    <div className="modal-text">
                    First debuted in January 2019 as a R markdown, this dive bar drinking game was intended to be a   
                    productive procrastination side project for IAP. Now that our coding skills have improved and our horizons
                    have extended beyond R, this year we've chosen to procrastinate by making it ~fancier~. 
                    <br>
                    </br>
                    <br>
                    </br> 
                    We'll be keeping our list of Boston-area dive bars and the 'divey-ness' algorithm to ourselves for now, 
                    but here you'll find the bingo card generator. 
                    <br>
                    </br>
                    <br>
                    </br> 
                    The rules themselves are pretty simple. Select some dive bars, make a route, bring your phone (and keys) (and wallet)
                    keep this page open in a browser, and check off the Things you witness. First one to get four in a row wins. (Wins what, 
                    we'll leave to you).
                    <br>
                    </br>
                    <br>
                    </br>
                    By pressing the button below you are absolving us of all liability for the poor decisions you make while
                    adventuring about on a dive bar crawl. And of course, remember to tip your bartenders.
                    </div>

                    <div className="modal-footer" onClick = {this.handleClose} >
                        <img src={beerClink} alt="beer" className="beer-icon"/>
                        Yes, I am an "adult"
                    </div>

                </div>
            </div>
        )
    }
}

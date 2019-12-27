import React, { Component } from 'react';
import ESB from '../assets/ftml-ESB.png';

export default class BreweryInfo extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: false } ;
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose = () => {
        this.setState({ visible: !this.state.visible })
        // console.log(this.state.visible)
    }

    render() {
        return (
            <>
            <p className="footer-text" onClick = {this.handleClose}> 
                [see more]
                <br></br> 2019 // f t m l 
            </p>

            <div  className={'modalDialog' + (this.state.visible ? "" : "invisible")} > 
                <div className="modal-content">
                    <img src={ESB} alt="ESB //f t m l" className="can-image"/>
                    <div className="footer-text-image" onClick = {this.handleClose}> 
                        coming soon ... 
                        <br></br> to return to the game click <strong>here</strong>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

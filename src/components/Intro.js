import React, { Component } from 'react'

export default class Intro extends Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            visible: true,
        } ;
    }

    handleClose(){
        this.setState({ visbile: !this.state.false })
        return alert('hallo')
    }

    render() {
        return (
            <div onClick={this.handleClose} >
                
            </div>
        )
    }
}

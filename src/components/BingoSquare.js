import React, { Component } from 'react'

export default class BingoSquare extends Component {

    constructor(props) {
        super(props);
        this.crossOff = this.crossOff.bind(this);
        this.state = {
            done: false,
        } ;
    }

    crossOff(){
        this.setState({ done: !this.state.done })
    }

    render() {
        return (
            <div className={"bingo-square" + (this.state.done ? "done" : "")} 
                key={prompt.key} 
                onClick={this.crossOff} >
                
                <p className="bingo-text">{this.props.value}</p>
            </div>
        )
    }
}

import React, { Component } from 'react'
import _ from 'underscore';

import sign from '../assets/sign-02.png';
import BingoCard from './BingoCard';

import prompts from './PromptsDatabase';


export default class BarSign extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            value:[],
        } ;
      }

    handleClick(){
        const newPromptsKeys = _.shuffle(_.range(prompts.length)).slice(0,16)
        const newPrompts = _.map(newPromptsKeys, function(val){return prompts[val]})
        this.setState({
            value: newPrompts   
        })
        // console.log(this.state)
}

    render() {

        return (

            <React.Fragment>

            <div className="bar-sign" onClick={this.handleClick}>
                <img src={sign} alt="sign" className="bar-sign"/>              
            </div>
         
            <BingoCard
                prompts= {this.state.value}
            />

            </React.Fragment>
        )
    }
}

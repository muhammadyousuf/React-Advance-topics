import React, { Component } from 'react'
import {add} from '../../helper/math/add'

export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstValue:0,
            secondValue:0

        }
    }
    render() {
        return (
            <div>
                <input />
                <input />
                <button>CalCulate</button>
            </div>
        )
    }
}

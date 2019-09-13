import React, { Component } from 'react'
//import {add} from '../../helper/math/add'

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
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button>%</button>
                <button>C</button>
                <button>=</button>
            </div>
        )
    }
}

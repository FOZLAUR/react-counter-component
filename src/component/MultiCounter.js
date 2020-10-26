import React, { Component } from 'react';
import CounterGroup from './CounterGroup';

class MultiCounter extends Component {
    constructor(props){
        super(props)

        // this.onGenerate = this.onGenerate.bind(this);

        this.state = { size: 0, sum: 0}
    }

    render() {
        const size = 3;
        return (
            <div>
                <CounterGroup size={size} />
            </div>
        );
    }
}

export default MultiCounter;
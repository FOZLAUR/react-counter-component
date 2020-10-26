import React, { Component } from 'react';

class CounterGroup extends Component {
    constructor(props){
        super(props)

        this.initArray = this.initArray.bind(this);
    }

    initArray(size){
        return Array.from(Array(size).keys());
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default CounterGroup;
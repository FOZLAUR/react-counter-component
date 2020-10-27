import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';

class CounterGroup extends Component {
    
    initArray(count) {
        // const number = size.length > 0 && parseInt(size) > 0 ? parseInt(size) : 0;
        return Array.from(Array(Number(count)).keys());
    }

    render() {
        // const size = this.props.size;
        const counterSizeArray = this.initArray(this.props.number);
        const counters = counterSizeArray.map((value) => (
            <CounterContainer key={value.toString} />   
        ));

        return (
            <div>
                { counters }
            </div>
        );
    }
}

export default CounterGroup;
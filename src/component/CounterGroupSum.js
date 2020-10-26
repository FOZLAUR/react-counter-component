import React, { Component } from 'react';

class CounterGroupSum extends Component {
    constructor(props){
        super(props)

        //this.onChange = this.onChange.bind(this);

        this.state = { sum: 0 }
    }

    onChange(value){
        this.setState(
            (prevState) => 
            (
                {
                    sum: prevState.sum = value
                }
            )
        );
    }

    render() {
        return (
            <div>
                <label />The total is {this.state.sum}
            </div>
        );
    }
}

export default CounterGroupSum;
import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {number : 0};
    }

    componentWillUnmount = () => {
        // this.props.addToSum(this.state.number * -1);
        this.props.resetSum(this.state.number);
    }
    
    onIncrease = () => {
        this.setState((prevState) => ({number : prevState.number + 1}));
        this.props.incrementSum();
    }

    onDecrease = () => {
        this.setState((prevState) => ({number : prevState.number - 1}));
        this.props.decrementSum();
    }

    render() {
        return (
            <section>
                <input type="button" value="+" onClick={this.onIncrease}/>
                <span>{this.state.number}</span>
                <input type="button" value="-" onClick={this.onDecrease}/>
            </section>
        );
    }
}

export default Counter;
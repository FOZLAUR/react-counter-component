import React, { Component } from 'react';
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';
import CounterGroupContainer from '../containers/CounterGroupContainer';
import CounterGroupSumContainer from '../containers/CounterGroupSumContainer';

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum : 0, 
            size: 0
        }
    }
    
    // onSizeChange = (size) => {
    //     this.setState({size});
    // }

    // addToSum = (valueToAdd) => {
    //     this.setState((prevState) => ({sum : prevState.sum + valueToAdd}));
    // }
    
    render() {
        return (
            <div>
                <fieldset>
                    <CounterSizeGeneratorContainer />
                    <CounterGroupSumContainer />
                </fieldset>
                <CounterGroupContainer />
                {/* <CounterGroup size={this.state.size} addToSum={this.addToSum}/> */}
            </div>
        );
    }
}

export default MultiCounter;
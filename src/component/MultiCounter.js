import React, { Component } from 'react';
import CounterGroup from './CounterGroup';
import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroupSum from './CounterGroupSum';

class MultiCounter extends Component {
    constructor(props){
        super(props)

        this.onGenerate = this.onGenerate.bind(this);

        this.state = { size: 0, sum: 0}
    }

    onGenerate(size){
        this.setState({size});
    }

    render() {
        return (
            <div>
                
                <fieldset>
                    <CounterSizeGenerator onGenerate={this.onGenerate} />
                    <CounterGroupSum />
                </fieldset>
                <CounterGroup size={this.state.size} />
            </div>
        );
    }
}

export default MultiCounter;
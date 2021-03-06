import React, { Component } from 'react';

class CounterSizeGenerator extends Component {

    constructor(props) {
        super(props);
        this.state = {size: 0}
    }
    
    onChange = (event) => {
        const value = event.target.value;
        this.setState(() => {
            return {size: value}
        });
        this.props.updateCounterSize(value);
    }

    render() {
        return (
            <div>
                <label htmlFor="size"> Enter amount of counters: </label>
                <input  type="number"
                        name="size"
                        id="size"
                        min="0"
                        value= {this.state.size}
                        onChange={this.onChange} />
            </div>
        );
    }
}

export default CounterSizeGenerator;
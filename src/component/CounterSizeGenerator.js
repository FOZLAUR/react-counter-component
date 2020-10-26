import React, { Component } from 'react';

class CounterSizeGenerator extends Component {
    constructor(props){
        super(props)

        this.onChange = this.onChange.bind(this);

        this.state = { size: 0 }
    }

    onChange(event){
        const value=event.target.value;
        this.setState(() => {
            return { size: value }
        }, this.props.onGenerate(value))
    }

    render() {
        return (
            <div>
                <fieldset>
                    <label htmlFor="size">Enter amount of numbers:</label>
                    <input 
                        type="number"
                        name="size"
                        id="size" 
                        value={this.state.size} 
                        onChange={this.onChange}/>
                </fieldset>
            </div>
        );
    }
}

export default CounterSizeGenerator;
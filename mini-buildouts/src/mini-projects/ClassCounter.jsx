import { Component } from 'react';

export default class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.state = { count: 0 };
    }

    increment () {
        this.setState((state, props) => ({count: state.count + 1}))
    }

    decrement () {
        this.setState((state, props) => ({count: state.count - 1}))
    }

    render() {
        return (<div>
            <h1>Counter App</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>)
    }
}
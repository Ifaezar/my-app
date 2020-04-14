import React, { Component } from 'react'

// const CounterScreen = (props) => {
//     return (
//         <div>
//             <h1>{props.kota}</h1>
//         </div>
//     )
// }

class CounterScreen extends React.Component {

    state = {
        test1: 0,
        test2: 0,
        test3: 0
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-4">
                        <h1>Counter 1 = {this.state.test1}</h1>
                        <p className="btn btn-danger" onClick={() => this.setState({ test1: this.state.test1 - 1 })} >-</p>
                        <p className="btn btn-primary" onClick={() => this.setState({ test1: this.state.test1 + 1 })}>+</p>
                    </div>
                    <div className="col-4">
                        <h1>Counter 2 = {this.state.test2}</h1>
                        <p className="btn btn-danger" onClick={() => this.setState({ test2: this.state.test2 - 1 })}>-</p>
                        <p className="btn btn-primary" onClick={() => this.setState({ test2: this.state.test2 + 1 })}>+</p>
                    </div>
                    <div className="col-4">
                        <h1>Counter 3 = {this.state.test3}</h1>
                        <p className="btn btn-danger" onClick={() => this.setState({ test3: this.state.test3 - 1 })}>-</p>
                        <p className="btn btn-primary" onClick={() => this.setState({ test3: this.state.test3 + 1 })}>+</p>
                    </div>
                </div>
                <h1>All Counters</h1>
                <div>
                    <p className="btn btn-danger" onClick={() =>
                        this.setState({
                            test1: this.state.test1 - 1,
                            test2: this.state.test2 - 1,
                            test3: this.state.test3 - 1
                        })}>-</p>
                    <p className="btn btn-primary" onClick={() =>
                        this.setState({
                            test1: this.state.test1 + 1,
                            test2: this.state.test2 + 1,
                            test3: this.state.test3 + 1
                        })}>+</p>
                </div>
                <p className="btn btn-success" onClick={() => 
                    this.setState({ test1: 0, 
                    test2: 0, 
                    test3: 0 })}>Reset</p>
            </>
        )
    }
}

export default CounterScreen
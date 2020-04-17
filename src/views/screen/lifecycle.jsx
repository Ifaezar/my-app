import React from 'react'

class LifecycleScreen extends React.Component{
    state = {
        username: '',
        time: new Date()
    }
    componentDidMount(){
        this.timer = setInterval(() =>this.triggerClock(),100)
    }

    triggerClock = () => {
    this.setState({time:new Date()})
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return(
            <div>
                <h1>Lifecycle Screen</h1>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
                {/* <input
                type="text"
                onChange={(e) => this.setState({username: e.target.value})}>
                </input> */}
            </div>
        )
    }
}

export default LifecycleScreen
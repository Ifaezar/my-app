import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProfileMenu from '../screen/weekend task/profile'
import { connect } from 'react-redux'

class NavBar extends Component {
    render() {
        return (
            <div className='d-flex justify-content-around align-items-center' style={{ height: "80px" }}>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/counter">Counter Screen</Link>
                {this.props.user}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return{
        halo: state.haha.todoInput,
        user: state.user.username
    }
}
export default connect(mapStatetoProps)(NavBar)

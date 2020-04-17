import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component{
    render(){
        return(
            <div className='d-flex justify-content-around align-items-center' style ={{height:"80px"}}>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
        )
    }
}

export default NavBar

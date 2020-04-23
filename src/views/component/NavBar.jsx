import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProfileMenu from '../screen/weekend task/profile'
import { connect } from 'react-redux'
import Cookie from 'universal-cookie'
import { logOutHandler} from '../../constant/redux/actions'
import swal from 'sweetalert'

const cookieObject = new Cookie();

class NavBar extends Component {
    logOut = () => {
        cookieObject.remove("authData")
        this.props.onLogout()
    }
    render() {
        return (
            <div className='d-flex justify-content-around align-items-center' style={{ height: "80px" }}>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/counter">Counter Screen</Link>
                {this.props.user.username}
                <input className='btn btn-danger' value="Log Out" onClick={this.logOut} />
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        halo: state.haha.todoInput,
        user: state.user
    }
}

const mapsDispacthToProps = {
    onLogout: logOutHandler
}
export default connect(mapStatetoProps, mapsDispacthToProps)(NavBar)

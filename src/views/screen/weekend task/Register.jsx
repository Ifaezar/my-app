import React, { Component } from 'react'
import { link } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../../constant/API'
import swal from 'sweetalert'
import { registerHandler } from '../../../constant/redux/actions'
import { connect } from 'react-redux'

class RegisterMenu extends Component {
    state = {
        username: '',
        password: '',
        passRepeat: '',
        fullName: '',
        role: '',
        isLoading: false
    }
    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }


    registerMenu = () => {
        // this.setState({ isLoading: true })
        // setTimeout(() => {
        const { username, password, passRepeat, role, fullName } = this.state
        const userData = {
            username,
            password,
            passRepeat,
            role,
            fullName
        }
        this.props.onRegis(userData)
        // }, 2000);
    }

    render() {
        const { username, password, passRepeat, fullName, role } = this.state
        return (
            <div className="justify-content-center text-center ">
                <h1>REGISTER MENU</h1>
                <h2>{this.props.user.errMsg}</h2>
                <div className='container'
                    style={{
                        border: "1px solid black",
                        width: "25%",
                        height: "300px"
                    }}>
                    <input
                        onChange={(event) => {
                            { this.inputHandler(event, "username") }
                        }}
                        type="text"
                        value={username}
                        placeholder="Username"
                        className="mb-1 form-control mt-3"
                        style={{ width: "100%" }} />
                    <input
                        onChange={(event) => {
                            { this.inputHandler(event, "fullName") }
                        }}
                        type="text"
                        value={fullName}
                        placeholder="Full Name"
                        className="mb-1 form-control"
                        style={{ width: "100%" }} />
                    <input
                        onChange={(event) => {
                            { this.inputHandler(event, "role") }
                        }}
                        type="text"
                        value={role}
                        placeholder="Role"
                        className="mb-1 form-control"
                        style={{ width: "100%" }} />
                    <input
                        onChange={(event) => {
                            { this.inputHandler(event, "password") }
                        }}
                        type="text"
                        placeholder="Password"
                        value={password}
                        className="mb-1 form-control"
                        style={{ width: "100%" }} />
                    <input
                        onChange={(event) => {
                            { this.inputHandler(event, "passRepeat") }
                        }}
                        type="text"
                        value={passRepeat}
                        placeholder="Repeat Password"
                        className="mb-1 form-control"
                        style={{ width: "100%" }} />
                    <br />
                    <p type="button"
                        onClick={this.registerMenu}
                        disabled={this.state.isLoading}
                        className="btn btn-block btn-primary"
                        style={{ width: "100%" }}>Register</p>

                </div>
            </div>
        )
    }
}

const mapsStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapsDispatchToProps = {
    onRegis: registerHandler
}

export default connect(mapsStateToProps, mapsDispatchToProps)(RegisterMenu)
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../../constant/API'
import swal from 'sweetalert'
import { Spinner } from 'reactstrap'
import { connect } from 'react-redux'
import { userInputHandler, loginHandler } from '../../../constant/redux/actions'
import Cookie from 'universal-cookie';

const cookieObject = new Cookie();

class LoginMenu extends Component {
    state = {
        username: '',
        password: '',
        isLogin: false
    }

    componentDidUpdate() {
        if (this.props.user.id) {
            cookieObject.set("authData", JSON.stringify(this.props.user))
            
        }
    }

    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }

    loginMenu = () => {
        const { username, password } = this.state
        const userData = {
            username,
            password
        }
        this.props.onLogin(userData)
        this.setState({username:''})
        this.setState({password:''})

    }

    render() {
        const { username, password, isLogin } = this.state
        if (!isLogin) {
            return (
                <div className="justify-content-center text-center ">
                    <h1>Login MENU</h1>
                    <p>username :{this.props.user.username}</p>
                    <p>{this.props.user.errMsg}</p>
                    <div className='container'
                        style={{
                            border: "1px solid black",
                            width: "25%",
                            height: "200px"
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
                                { this.inputHandler(event, "password") }
                            }}
                            type="text"
                            placeholder="Password"
                            value={password}
                            className="mb-1 form-control"
                            style={{ width: "100%" }} />
                        <br />
                        <p type="button"
                            onClick={this.loginMenu}
                            className="btn btn-primary"
                            style={{ width: "100%" }}>Login</p>
                    </div>
                </div>
            )
        } else {
            return <div>.... yeay</div>
            // return <Redirect to={`/profileSukses/${username}`} />
        }
    }
}
const mapsStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapsDispatchToProps = {
    onChangeUser: userInputHandler,
    onLogin: loginHandler
}
export default connect(mapsStateToProps, mapsDispatchToProps)(LoginMenu)
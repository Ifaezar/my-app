import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../../constant/API'

class LoginMenu extends Component {
    state = {
        username: '',
        password: '',
        kondisi: false
    }

    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }

    loginMenu = () => {
        const { username, password, kondisi } = this.state
        let login = false
        Axios.get(`${API_URL}/user`)
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    if ((res.data[i].username == username) && (res.data[i].password == password)) {
                        login = true
                        this.setState({ kondisi: true })
                    }
                }
                if (!login){
                    alert("mohon maaf username dan password yang anda masukkan salah")
                }
            })
    }

    render() {
        const { username, password, kondisi } = this.state
        if (!kondisi) {
            return (
                <div className="justify-content-center text-center ">
                    <h1>Login MENU</h1>
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
        }else{
            return <Redirect to={`/profile/${username}`} />
        }
    }
}

export default LoginMenu
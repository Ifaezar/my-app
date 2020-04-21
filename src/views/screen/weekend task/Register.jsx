import React, { Component } from 'react'
import { link } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../../constant/API'
import swal from 'sweetalert'

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
        const { username, password, passRepeat, role, fullName } = this.state
        this.setState({ isLoading: true })
        setTimeout(() => {
            Axios.get(`${API_URL}/user`, {
                params: {
                    username: `${username}`
                }
            })
                .then(res => {
                    if (res.data.length == 0) {
                        if (password == passRepeat) {
                            this.setState({ kondisi: 0 })
                            Axios.post(`${API_URL}/user`, {
                                username: `${username}`,
                                password: `${password}`,
                                fullName: `${fullName}`,
                                role: `${role}`
                            })
                                .then(res => {
                                    console.log(res)
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                            this.setState({ username: '' })
                            this.setState({ password: '' })
                            this.setState({ role: '' })
                            this.setState({ fullName: '' })
                            this.setState({ passRepeat: '' })
                            swal("selamat kamu berhasil membuat akun")
                            this.setState({ isLoading: false })
                        } else {
                            swal("mohon maaf password yang anda masukkan salah")
                            this.setState({ isLoading: false })
                        }
                    } else {
                        swal(`mohon maaf ${username} sudah dipakai`)
                        this.setState({ isLoading: false })
                    }
                })
        }, 2000);
    }

    render() {
        const { username, password, passRepeat, fullName, role } = this.state
        return (
            <div className="justify-content-center text-center ">
                <h1>REGISTER MENU</h1>
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

export default RegisterMenu
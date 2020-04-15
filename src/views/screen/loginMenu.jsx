import React from 'react'
import { render } from '@testing-library/react'

class LoginMenu extends React.Component {
    state = {
        userRegis: '',
        userData: [],
        passRegis: '',
        passRepeat: '',
        userLogin: '',
        passLogin: '',
        kondisi: 0,
        username: '',
        activeIdx:null
    }
    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }
    registerMenu = () => {
        const { userRegis, passRegis, passRepeat, userData } = this.state
        if (passRegis == passRepeat) {
            let newData = {
                userRegis, passRegis
            }
            this.setState({ userData: userData.concat([newData]) })
            this.setState({ kondisi: 0 })
            this.setState({ userRegis: '' })
            this.setState({ passRegis: '' })
            this.setState({ passRepeat: '' })
            alert("selamat kamu berhasil membuat akun")

        } else {
            alert("mohon maaf password yang anda masukkan salah")
        }
    }
    loginMenu = () => {
        let a = 0
        const {userData, userLogin, passLogin} = this.state
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].userRegis == userLogin && userData[i].passRegis == passLogin) {
                a = 1
                this.setState({ kondisi: 1 })
            }
        }
        if (a == 1) {
            this.setState({ username: userLogin })
            this.setState({ userLogin: '' })
            this.setState({ passLogin: '' })
            this.renderTable()
        }
        if (a < 1) {
            alert("mohon maaf username dan passward masukkan salah")
            this.setState({ kondisi: 0 })
        }
    }
    renderTable = () => {
        const {userData} = this.state
        return userData.map((val, index) => {
            return (
                <>
                    <tr>
                        <th>{index + 1}</th>
                        <th>{val.userRegis}</th>
                        <th><input type="button"
                            value="Delete"
                            className="btn btn-danger"
                            onClick={() =>this. deleteData(index)}
                        ></input>
                            <input type="button"
                                value="Edit"
                                className="btn btn-primary"
                                
                            ></input></th>
                    </tr>
                </>
            )
        })
    }
    deleteData = (index) => {
        const {userData} = this.state
        let temp = [...userData]
        temp.splice(index, 1)
        this.setState({ userData: temp })

    }
    render() {
        const { userRegis, 
            userData, 
            passRegis, 
            passRepeat, 
            userLogin, 
            passLogin, 
            kondisi, 
            username }
             = this.state
        return (
            <div className="justify-content-center text-center ">
                <h1>LOGIN MENU</h1>
                <div className='container'
                    style={{
                        border: "1px solid black",
                        width: "25%",
                        height: "270px"
                    }}>
                    <h2 className='mt-2 mb-3'>Register</h2>
                    <input
                        onChange={(event) => {
                            { this.inputHandler(event, "userRegis") }
                        }}
                        type="text"
                        value={userRegis}
                        placeholder="Username"
                        className="mb-1 form-control"
                        style={{ width: "100%" }} />
                    <input
                        onChange={(event) => {
                            { this.inputHandler(event, "passRegis") }
                        }}
                        type="text"
                        placeholder="Password"
                        value={passRegis}
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
                        className="btn btn-block btn-primary"
                        style={{ width: "100%" }}>Register</p>

                </div>
                <br />
                <div>
                    <center>
                        <table className="table" style={{ width: "50%" }}>
                            <thead>
                                <tr>
                                    <td>No</td>
                                    <td>Username</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTable()}
                            </tbody>
                        </table>
                    </center>
                </div>
                <br />
                <div className='container'
                    style={{
                        border: "1px solid black",
                        width: "25%",
                        height: "250px"
                    }}>
                    <h2 className='mt-4 mb-3'>Login</h2>
                    <input
                        onChange={(event) => {
                            { this.inputHandler(event, "userLogin") }
                        }}
                        type="text"
                        value={userLogin}
                        placeholder="Username"
                        className="mb-1 form-control"
                        style={{ width: "100%" }} />
                    <input
                        onChange={(event) => {
                            { this.inputHandler(event, "passLogin") }
                        }}
                        type="text"
                        placeholder="Password"
                        value={passLogin}
                        className="mb-1 form-control"
                        style={{ width: "100%" }} />
                    <br />
                    <p type="button"
                        onClick={this.loginMenu}
                        className="btn btn-primary"
                        style={{ width: "100%" }}>Login</p>
                </div>
                {
                    kondisi > 0 ? (
                        <h1>Welcome {username}</h1>
                    ) : null
                }

            </div>
        )
    }
}

export default LoginMenu
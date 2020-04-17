import React, { Component } from 'react'
import Axios from 'axios'
import { API_URL } from '../../constant/API'

class ProfileScreen extends Component {
    state = {
        userList: []
    }

    getDataHandler = () => {
        Axios.get("http://localhost:3001/user", {
            //search sesuai nama    
            params: {
                role: "carry",
            },
        })
            .then((res) => {        //res = respon dari API
                console.log(res.data)
                // this.setState({ userList: res.data })
            })
            .catch((err) => {       //err = error
                console.log(err)
            })


        //REquest by ID, ID deltekaan di http://localhost:3001/user/"ID"
        // Axios.get("http://localhost:3001/user/1")
        //     .then((res) => {        //res = respon dari API
        //         console.log(res)
        //         this.setState({ userList: res.data })
        //     })
        //     .catch((err) => {       //err = error
        //         console.log(err)
        //     })
    }

    deleteDataHandler = () => {
        Axios.delete(`${API_URL}/user/1`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    postDataHandler = () => {
        Axios.post(`${API_URL}/user`, {
            username: "RTZ",
            password: "paswword",
            fullname: "2EZ4RTZ",
            role: "support"
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="text-center">
                <h1>Profile Screen</h1>
                <h2>Welcome, {this.props.match.params.username}</h2>
                <input
                    type="button"
                    onClick={this.getDataHandler}
                    value="Get Data"
                    className="btn- btn-success" />
                <input
                    type="button"
                    onClick={this.deleteDataHandler}
                    value="Delete Data"
                    className="btn- btn-danger" />
                <input
                    type="button"
                    onClick={this.postDataHandler}
                    value="Post Data"
                    className="btn- btn-primary" />
            </div>
        )
    }
}

export default ProfileScreen
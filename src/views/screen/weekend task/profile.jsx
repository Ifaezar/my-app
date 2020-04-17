import React, { Component } from 'react'
import { link } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../../constant/API'
import '../../../views/component/style.css'

class ProfileMenu extends Component {
    state = {
        arrData:[],
        username: '',
        id: '',
        fullname: '',
        role: ""
    }
    componentDidMount() {
        const {arrData} = this.state
        Axios.get(`${API_URL}/user`, {
            params: {
                username: `${this.props.match.params.username}`
            }
        })
            .then(res => {
                this.setState({ arrData:  res.data[0]})
            })
    }

    render() {
        const { arrData } = this.state
        return (

            <div >
                <h1 className="text-center">Welcome, {this.props.match.params.username}</h1>
                <h2 className="text-center">Your Profile</h2>
                <div className='d-flex justify-content-around align-items-center'>
                    <p style={{fontSize:"26px"}}>ID : {arrData.id}</p>
                    <p style={{fontSize:"26px"}}>Username : {arrData.username}</p>
                    <p style={{fontSize:"26px"}}>Full Name : {arrData.fullName}</p>
                    <p style={{fontSize:"26px"}}>Role : {arrData.role}</p>
                </div>
            </div>

        )
    }
}

export default ProfileMenu
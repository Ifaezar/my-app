import React from 'react'
import { Link } from 'react-router-dom'

class InputScreen extends React.Component {
    state = {
        username: '',
        email: '',
        count: 0,
        textbox:''
    }

    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }

    

    render() {
        const { username, email, textbox } = this.state

        return (
            <div className='text-center'>
                <h1>Input Screen</h1>
                <h3>Welcome: {username}</h3>
                <h3>Email: {email}</h3>
                <input
                    //bentuk aslinya ={(event) => {{this.inputHandler(event)}}}
                    // onChange={inputHandler} 
                    onChange={(event) => { { this.inputHandler(event, "username") } }}
                    type="text" placeholder="Username" />
                <br />
                <input
                    onChange={(event) => { { this.inputHandler(event, "email") } }}
                    type="text" placeholder="Email" />
                <br />
                <textarea onChange={(event) => { { this.inputHandler(event, "textbox") } }} cols="30" rows="10"></textarea>
                <p>{textbox.length} / 140</p>
                <Link type="button" className="btn btn-primary" to={`/profile/${username}`}> Login
                </Link>
            </div>
        )
    }
}

export default InputScreen
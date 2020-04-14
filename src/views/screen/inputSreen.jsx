import React from 'react'

class InputScreen extends React.Component {
    state = {
        username: '',
        email: '',
        count: 0,
        textbox:''
    }
    render() {
        const { username, email, textbox } = this.state

        const inputHandler = (event, field) => {
            this.setState({ [field]: event.target.value })
        }
        return (
            <div>
                <h1>Input Screen</h1>
                <h3>Welcome: {username}</h3>
                <h3>Email: {email}</h3>
                <input
                    //bentuk aslinya ={(event) => {{inputHandler(event)}}}
                    // onChange={inputHandler} 
                    onChange={(event) => { { inputHandler(event, "username") } }}
                    type="text" placeholder="Username" />
                <br />
                <input
                    onChange={(event) => { { inputHandler(event, "email") } }}
                    type="text" placeholder="Email" />
                <br />
                <textarea onChange={(event) => { { inputHandler(event, "textbox") } }} cols="30" rows="10"></textarea>
                <p>{textbox.length} / 140</p>
            </div>
        )
    }
}

export default InputScreen
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todoInputHandler, addtodoHandler, loginHandler } from '../../constant/redux/actions'
import { userInputHandler } from '../../constant/redux/actions'


class TodoReduxScreen extends Component {

    render() {
        return (
            <div className="container text-center">
                <h1>todo Screen</h1>

                {/* <input
                    type="text"
                    className="form-control"
                    placeholder="input todo item"
                    onChange={(e) => this.props.onChangeTodo(e.target.value)}
                >
                </input>
                <input
                    type="text"
                    className="form-control"
                    placeholder="input username"
                    onChange={(e) => this.props.onChangeUser(e.target.value)}
                >
                </input>
                <br /> */}
                {/* <input
                    type="text"
                    className="form-control"
                    placeholder="input Todo List"
                    onChange={(e) => this.props.onChangeTodo(e.target.value)}
                ></input>
                <input
                    type="button"
                    className="btn btn-primary"
                    value="submit"
                    onClick={() => this.props.onAddList(this.props.todo.todoInput)}
                >
                </input>
                {this.props.todo.todoList.map((val) => {
                    return <p>{val}</p>;
                })} */}
                <p>Testing 1: {this.props.user.testing}</p>
                <p>Testing 2: {this.props.user.testing2}</p>
                <input
                    type="button"
                    className="btn btn-primary"
                    value="testing"
                    onClick={this.props.onLogin}
                ></input>
            </div>
        )
    }
}

const mapsStateToProps = (state) => {
    return {
        todo: state.haha,
        user: state.user
    }
}

const mapsDispatchToProps = {
    onChangeTodo: todoInputHandler,
    onChangeUser: userInputHandler,
    onAddList: addtodoHandler,
    onLogin: loginHandler
}


export default connect(mapsStateToProps, mapsDispatchToProps)(TodoReduxScreen)
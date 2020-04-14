import React from 'react'

class LoginMenu extends React.Component {
    state = {
        userRegis: '',
        userData:[],
        passData:[],
        passRegis: '',
        passRepeat: '',
        userLogin: '',
        passLogin: '',
        kondisi: 0
    }
    render() {
        const { userRegis, userData,passData, passRegis, passRepeat, userLogin, passLogin, kondisi} = this.state
        const inputHandler = (event, field) => {
            this.setState({ [field]: event.target.value })
        }
       
        const registerMenu = () => {
            
            if (passRegis == passRepeat) {
                this.setState({userData:userData.concat([userRegis])})
                this.setState({passData:passData.concat([passRegis])})
                this.setState({ kondisi: 0 })
                document.getElementById("user").value=''
                document.getElementById("pass").value=''
                document.getElementById("passRep").value=''
                alert("selamat kamu berhasil membuat akun")
                
            } else {
                alert("mohon maaf password yang anda masukkan salah")
            }
        }
        const loginMenu = () => {
            let a = 0
            for (let i = 0; i < userData.length; i++) {
                if (userData[i] == userLogin && passData[i] == passLogin) {
                    a = 1
                    this.setState({ kondisi: 1 })
                }
            }
            if(a == 1){
                document.getElementById("userLog").value='' 
                document.getElementById("passLog").value=''
            }
            if (a < 1) {
                alert("mohon maaf username dan passward masukkan salah")
                this.setState({ kondisi: 0 })
            }
        }
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
                        onChange={(event) => { { inputHandler(event, "userRegis") } }}
                        type="text" placeholder="Username" className="mb-1 form-control" id="user" style={{width:"100%"}} />
                    <input
                        onChange={(event) => { { inputHandler(event, "passRegis") } }}
                        type="text" placeholder="Password" className="mb-1 form-control" id="pass"style={{width:"100%"}}/>
                    <input
                        onChange={(event) => { { inputHandler(event, "passRepeat") } }}
                        type="text" placeholder="Repeat Password" className="mb-1 form-control" id="passRep" style={{width:"100%"}}/>
                    <br />
                    <p type="button" onClick={registerMenu} className="btn btn-block btn-primary" style={{width:"100%"}}>Register</p>

                </div>
                <div className='container'
                    style={{
                        border: "1px solid black",
                        width: "25%",
                        height: "250px"
                    }}>
                    <h2 className='mt-4 mb-3'>Login</h2>
                    <input
                        onChange={(event) => { { inputHandler(event, "userLogin") } }}
                        type="text" placeholder="Username" className="mb-1 form-control" id="userLog" style={{width:"100%"}}/>
                    <input
                        onChange={(event) => { { inputHandler(event, "passLogin") } }}
                        type="text" placeholder="Password" className="mb-1 form-control" id="passLog" style={{width:"100%"}}/>
                    <br />
                    <p type="button" onClick={loginMenu} className="btn btn-primary" style={{width:"100%"}}>Login</p>
                </div>
                    {
                        kondisi > 0 ? (
                            <h1>Welcome {userRegis}</h1>
                        ): null
                    }
                    
            </div>
        )
    }
}

export default LoginMenu
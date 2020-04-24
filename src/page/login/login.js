import React, {Component} from "react"

class Login extends Component {
    render(){
        return(
            <div>
                <h2>Login</h2>
                <br/>
                <label>Login</label>
                <input></input>
                <br/>
                <label>Password</label>
                <input></input>
                <button onClick={() => {console.log("Click"); this.props.login();}}>Sign in</button>
            </div>
        )
    }
}

export default Login;
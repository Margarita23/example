import React, {Component} from "react";
import Login from "../../page/login/login";

const authContext = React.createContext(
    {user: {}}
);

class Auth extends Component {

    state = {authenticate: false}

    login = () => {
        this.setState({authenticate: true});
        console.log("Click on login");
    }

    logout() {
        this.setState({authenticate: false});
        console.log("Click on exit");
    }

    auth() {
        if(this.state.authenticate){
            return (
                <authContext.Consumer>
                    {context => (
                        <div>
                            You are logged in
                            {this.props.children}
                        </div>
                        
                    )}
                </authContext.Consumer>
            )
        } 
        else {
            return (
                <authContext.Consumer>
                    {context => (
                        <div>
                            Please login
                            <Login login={this.login}></Login>
                        </div>
                    )}
                </authContext.Consumer>
                
            )
        }
    }

    render() {
        return (
            <authContext.Provider value={this.state.authenticate}>
                {this.auth()}
            </authContext.Provider>
        ) 
    }
}

export default Auth;
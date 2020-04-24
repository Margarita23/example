import React, {Component} from 'react';
import './App.css';

import Login from "./page/login/login";
import Main from "./page/main/main";
import Profile from "./page/profile/propfile";

import Auth from "./components/auth-context/auth";

const PAGES = {
  login: "Логин",
  main: "Главная",
  profile: "Профиль",
  exit: "Выход"
}
class App extends Component{
  constructor(props) {
    super(props);
    this.goToPage = this.goToPage.bind(this);
    this.state = {
      showComponent: null
    }
  }

  goToPage(page){
    switch(page){
      case PAGES.login : this.setState({showComponent: <Login></Login>}); console.log("LOGIN"); break;
      case PAGES.main :  this.setState({showComponent: <Main/>}); console.log("MAIN"); break;
      case PAGES.profile :  this.setState({showComponent: <Profile/>}); console.log("PROFILE"); break;
      default :  this.setState({showComponent: <Login/>});
    }
    console.log("go to page");
  }

  render () {
    return (
      <>
        <ul>
          {Object.entries(PAGES).map((item) => { return (
            <li key={item[0]}><button onClick={()=> {this.goToPage(item[0])}}>{item[1]}</button></li>
          )})}
        </ul>
        <Auth>
          {this.state.showComponent}
        </Auth>
      </>
    );
  }
}

export default App;

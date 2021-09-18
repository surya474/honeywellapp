import { HashRouter as Router , Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './components/login/login'


function App() {

    if(localStorage.getItem("isLoggedIn")){
        if(localStorage.getItem("isAdminLoggedIn")){

        }else if(localStorage.getItem("isDelLoggedIn")){

        }else{

        }
    }else{
      return(
      
       
         <Login /> )
        
    }

}

export default App;

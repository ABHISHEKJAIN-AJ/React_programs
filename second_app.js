import React,{Component} from 'react';
import Ninjas from './Ninjas'
//import logo from './logo.svg';
//import './App.css';

class App extends Component{
    render() {
        return (
            <div className="App">
                <h1> WELCOME TO MY FIRST REACT APP...!!! </h1>
                <Ninjas name="jain" age="20" belt="green"/>

            </div>
        )
    }

}
export default App;

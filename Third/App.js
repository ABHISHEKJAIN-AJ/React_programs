import React,{Component} from 'react';
import Ninjas from './Ninjas'
//import logo from './logo.svg';
//import './App.css';

class App extends Component{
    state={
        ninjas : [
            {name:"Abhi" , age:21 , belt:"blue", id:1},
            {name:"jain" , age:20 , belt:"green",id:2}
        ]
    }
    render() {
        return (
            <div className="App">
                <h1> WELCOME TO MY FIRST REACT APP...!!! </h1>
                <Ninjas ninjas={this.state.ninjas}/>
            </div>
        )
    }

}
export default App;

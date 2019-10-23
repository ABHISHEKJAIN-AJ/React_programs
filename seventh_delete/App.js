import React,{Component} from 'react';
import Ninjas from './Ninjas'
//import logo from './logo.svg';
//import './App.css';
import AddNinja from './AddNinja'

class App extends Component{
    state={
        ninjas : [
            {name:"Abhi" , age:21 , belt:"blue", id:1},
            {name:"jain" , age:20 , belt:"green",id:2}
        ]
    }
    addninja=(ninja)=>{
        ninja.id=Math.random();
        let ninjas=[...this.state.ninjas,ninja]
        this.setState(
            {
                ninjas:ninjas
            }
        )
    }

    deleteNinja=(id)=>{
        let ninjas=[...this.state.ninjas.filter(ninja=>{
            return ninja.id!==id

        })]
        this.setState(
            {
                ninjas:ninjas
            }
        )
    }
    render() {
        return (
            <div className="App">
                <h1> WELCOME TO MY FIRST REACT APP...!!! </h1>
                <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
                <AddNinja addninja={this.addninja}/>

            </div>
        )
    }

}
export default App;

import React,{Component} from 'react';
class Ninjas extends Component{
    render() {
        return (
            <div className="ninja">
                <div>name : {this.props.name}</div>
                <div>age : {this.props.age}</div>
                <div>belt : {this.props.belt}</div>

            </div>
        )
    }

}

export default Ninjas;

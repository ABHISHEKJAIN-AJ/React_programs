import React,{Component} from 'react';
class Ninjas extends Component{
    render() {
        const {name,age,belt}=this.props;
        return (
            <div className="ninja">

                <div>name : {name}</div>
                <div>age : {age}</div>
                <div>belt : {belt}</div>

            </div>
        )
    }

}

export default Ninjas;

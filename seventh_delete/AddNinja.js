import React,{Component} from 'react';
class AddNinja extends Component{
    state={
        name : null,
        age : null,
        belt : null,
        id : null
    }

    handleChange= (e)=>{
        e.preventDefault();
        this.setState({
                [e.target.id]:e.target.value
            }
        )
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addninja(this.state);

    }

    render()
    {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">NAME : </label>
                <input type="text" id="name" onChange={this.handleChange}/>
                <label htmlFor="age">Age : </label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="belt">BELT : </label>
                <input type="text" id="belt" onChange={this.handleChange}/>
                <button type="submit">SUBMIT</button>
            </form>
            </div>
        )
    }

}

export default AddNinja;

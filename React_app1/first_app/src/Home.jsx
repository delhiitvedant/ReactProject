import React,{Component} from 'react'
class Home extends React.Component
{
    constructor()
    {
        super();
        this.state={
            count:0
        };
    }
     increment=()=>{
        this.setState({count:this.state.count+=1})
    }
    decrement=()=>{
        this.setState({count:this.state.count-=1})
    }
    
    render()
    {
        return (
            <>
            <h1>This is My first class Component{this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            </>
        )
    }

}


export default  Home;
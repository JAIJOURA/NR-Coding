import React from "react";
class ProfileClass extends React.Component{
constructor(props){
    super(props)
    this.state={
        count:0
    }
console.log('constructor')
    }
    componentDidMount(){ 
        console.log('componentDidMount')
    }
    componentDidUpdate(){ // this will execute when something updates 
        console.log('componentDidUpdate')
    }
     componentWillUnmount(){
        console.log('componentWillUnmount')
     }
 handleClick = ()=>{
this.setState({count:this.state.count+1})
 }
    render(){
        return(
            <>
            <h1 onClick={this.handleClick}>I'm inside the class based Component {this.props.name + this.state.count}</h1>
            {console.log('render')}
            </>
        )
    }

}

export default ProfileClass
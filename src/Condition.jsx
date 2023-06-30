import React from "react";

class Condition extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            login : false
        }
    }
  loginn = () =>{
    this.setState({login:true})
  }
  logout = () =>{
    this.setState({login:false})
  }

    render(){
        let {login} = this.state

        if (login){

            return(
                <>
                 <div className="outerbox">
                <h1>Welcome !! </h1>
                <button onClick={this.logout} className="btn1"> Logout</button>
                </div>
                </>
            )
       
           
        } else{
            return(
                <>
                <div className="outerbox">
                    <h1>Login</h1>
                    <input type="text" placeholder="Username" className="btn"></input>
                    <input type="password" placeholder="Password"className="btn2"></input>
                    <div className="for">Forgot Password ?</div>
                    <button onClick={this.loginn} className="btn1"> Login</button>
                    <div className="not">Not a member? <span>Signup</span></div>


                </div>
                </>
               
            )
        }
           
    }
}


export default Condition
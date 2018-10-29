import React from "react";
import NavHeader from "@/components/NavHeader";
import profile from "@/images/profile.png";
import {Link} from "react-router-dom";
import Alert from "@/components/Alert";
import "./index.less"
import {connect} from "react-redux";
import actions from "@/store/actions/session";
class Login extends React.Component{
    handleSubmit = (event)=>{
        let username = this.username.value;
        let password = this.password.value;
        this.props.login({username,password})
    }
    render(){
        return (
            <div className="login">
                <NavHeader title = "登陆"></NavHeader>
                <div className="login-bg">
                    <img src={profile} alt=""/>
                </div>
                <input type="text" placeholder="手机号" ref={ref=>this.username=ref}/>
                <input type="password" placeholder="密码" ref={ref=>this.password=ref}/>
                <Link to="reg">前往注册</Link>
                <button onClick={this.handleSubmit}>登陆</button>
                {
                    (this.props.success || this.props.error)&& (
                        <Alert type={this.props.success?'success':'error'} message={this.props.success || this.props.error}></Alert>
                    )

                }
            </div>
        )
    }
}
export default connect(state=>state.session,actions)(Login)
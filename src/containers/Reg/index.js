import React from "react";
import NavHeader from "@/components/NavHeader";
import Alert from "@/components/Alert";
import profile from "@/images/profile.png";
import {Link} from "react-router-dom";
import "./index.less";
import actions from "@/store/actions/session";
import {connect} from "react-redux";

class Reg extends React.Component{
    handleSubmit = (event)=>{
        let username = this.username.value;
        let password = this.password.value;
        this.props.reg({username,password})
    }
    render(){
        return (
            <div className="reg">
                <NavHeader title = "注册"></NavHeader>
                <div className="login-bg">
                    <img src={profile} alt=""/>
                </div>
                <input type="text" placeholder="手机号" ref={ref=>this.username=ref}/>
                <input type="password" placeholder="密码" ref={ref=>this.password=ref}/>
                <Link to="/login">前往登陆</Link>
                <button onClick={this.handleSubmit}>注册</button>
                {
                    (this.props.success || this.props.error)&& (
                            <Alert type={this.props.success?'success':'error'} message={this.props.success || this.props.error}></Alert>
                        )

                }
            </div>
        )
    }
}
export default connect(state=>state.session,actions)(Reg)
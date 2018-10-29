import React,{Component} from "react";
import "./index.less";
import {Link} from "react-router-dom";
import profile from "@/images/profile.png";
import {connect} from "react-redux";
import actions from "@/store/actions/session";
class Profile extends Component{
    render(){
        return (
            <div className="profile">
                <img src={profile} alt=""/>
                {this.props.user? <a>{this.props.user.username}</a>:<Link to="/login">登陆</Link>}
            </div>
        )
    }
}
export default connect(state=>state.session,actions)(Profile)
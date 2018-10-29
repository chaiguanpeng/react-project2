import React from "react";
import {connect} from "react-redux";
import {Redirect,Route,withRouter} from "react-router-dom";
import {validate} from "@/api/session";
import store from "@/store";
import * as types from "@/store/action-types";
class PrivateRoute extends React.Component{
    componentDidMount(){
        //发请求 如果没登陆过 跳转到登陆页
        validate().then(result=>{
            if(!result.user){ //没登陆
                this.props.history.push({
                    pathname:'/login',
                    state:{from:this.props.path}
                })
            }
        })
    }
    render(){
        return (
            <Route {...this.props}/>
        )
    }
}
export default withRouter(PrivateRoute)
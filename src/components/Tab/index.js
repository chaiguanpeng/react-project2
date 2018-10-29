import React,{Component,Fragment} from "react";
import  {NavLink,Switch} from "react-router-dom";
import "./index.less";
export default class Tab extends Component{
    render(){
        return (
            <nav className="tab">
                    <NavLink to="/" exact activeClassName="x">
                        <i className="iconfont  icon-xingqiu"></i>
                        首页
                    </NavLink>
                    <NavLink to="/mime" activeClassName="y">
                        <i className="iconfont  icon-kecheng-copy"></i>
                        我的课程
                    </NavLink>
                    <NavLink to="/profile" activeClassName="z">
                        <i className="iconfont  icon-react"></i>
                        个人中心
                    </NavLink>
            </nav>
        )
    }
}
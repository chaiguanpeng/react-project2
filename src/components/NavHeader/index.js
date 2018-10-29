import React from "react";
import "./index.less";
import {withRouter} from "react-router-dom";
class NavHeader extends React.Component{
    render(){
        return (
                <div className="navheader">
                    <i className="iconfont icon-fanhui" onClick={()=>this.props.history.goBack()}></i>
                    {this.props.title}
                </div>
        )
    }
}
export default withRouter(NavHeader)
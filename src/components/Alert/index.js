import React from "react";
import "./index.less"
export default class Alert extends React.Component{
    render(){
        return (
            <div className={`alert alert-${this.props.type}`}>
                {this.props.message}
            </div>
        )
    }
}
import React from "react";
import "./index.less";
import loading from "@/images/loading.gif"
export default class Loading extends React.Component{
    render(){
        return (
            <div className="loading">
                <img src={loading} alt=""/>
            </div>
        )
    }
}
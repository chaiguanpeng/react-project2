import React,{Component} from "react";
import {Router} from "react-router-dom";
import PropTypes from "prop-types";
import {LOCATION_CHANGE} from "./reducer";
export default class ConnectedRouter extends Component{
    //老的写法 通过 this.context.store
    static contextTypes = {
        store:PropTypes.object
    }
    handleLocationChange = (location)=>{
        this.context.store.dispatch({
            type:LOCATION_CHANGE,
            payload:location
        })
    }
    componentWillMount(){
        //h5的api,监听路径的变化，执行对应的回调
        this.props.history.listen(this.handleLocationChange)
    }
    render(){
        return <Router {...this.props}/>
    }
}
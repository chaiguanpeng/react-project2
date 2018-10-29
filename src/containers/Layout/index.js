import React,{Component,Fragment} from "react";
import Tab from "../../components/Tab/index";
import "../../common/global.less";
import {validate} from "@/api/session";
import store from "@/store";
import * as types from "@/store/action-types";
export default class Index extends Component{
    componentDidMount(){
        validate().then(payload=>{
            // console.log(payload);
            store.dispatch({type:types.SET_SESSION,payload});
        })
    }
    render(){
        return (
            <Fragment>
                {this.props.children}
                <Tab></Tab>
            </Fragment>
        )
    }
}
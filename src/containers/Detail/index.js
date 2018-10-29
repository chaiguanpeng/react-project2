import React from "react";
import "./index.less";
import NavHeader from "@/components/NavHeader";
import {Redirect} from "react-router-dom";
//detail是由路由渲染出来的话，会有三个属性 history location match
export default class Detail extends React.Component{
    state = {
        lesson:this.props.location.state ||{}
    };
    componentDidMount(){
        //解决刷新页面空白 未完待续
        let lesson = this.state.lesson;
        let id = this.props.match.params.id;
        //如果从父组件传来的lesson没有值
        if(!lesson){
            let id = this.props.match.params.id;
        }
    }
    render(){
        let {lesson} = this.state;
        return (
            lesson?(
                    <div className="lesson-detail">
                        <NavHeader title="课程详情"></NavHeader>
                        <img src={lesson.poster} alt=""/>
                        <p>{lesson.title}</p>
                        <p>{lesson.price}</p>
                    </div>
                ):<Redirect to="/"/>

        )
    }
}
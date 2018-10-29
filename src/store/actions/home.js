import * as types from "../action-types";
import {Sliders,getLessons} from "@/api/home"
export default {
    changeCategory(category){
        return {type:types.CHANGE_CATEGORY,payload:category}
    },
    getSliders(){
        return function (dispatch, getState) {
            Sliders().then(slider=>{
                dispatch({type:types.SET_HOME_SLIDERS,payload:slider})
            })
        }
    },
    getLessons(){
        return function (dispatch, getState) {
            let {category,lessons:{offset,limit,loading,hasMore}} = getState().home;
            if(hasMore && !loading){
                dispatch({type:types.SET_HOME_LOADING,payload:true});    //一个功能把loading改为true
                getLessons(category,offset,limit).then(lessons=>{
                    dispatch({type:types.SET_HOME_LESSONS,payload:lessons})
                })
            }
        }
    },
    refreshLessons(){   //刷新取一页数据，跟getLesson对比，不需要offset  为0
        return function (dispatch, getState) {
            let {category,lessons:{limit,loading,hasMore}} = getState().home;
            console.log(category);
            if(!loading){
                //刷新课程前做两件事情,1、清空list 2、loading改为true
                dispatch({type:types.RESET_HOME_LESSONS});
                getLessons(category,0,limit).then(lessons=>{
                    console.log(lessons);
                    dispatch({type:types.REFRESH_HOME_LESSONS,payload:lessons})
                })
            }

        }
    }
}
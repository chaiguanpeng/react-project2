import * as types from "../action-types";
import {reg,login} from "@/api/session";
import {push} from "react-router-redux";
import {CALL_HISTORY_METHOD} from "../../react-router-redux/actions";
export default {
    reg(body){
        return function (dispatch, getState) {
            reg(body).then(payload=>{
                dispatch({type:types.SET_SESSION,payload});
                //如果说注册成功，要跳到登陆页登陆，如果注册失败,重新填写提交
                if(!payload.error){

                    dispatch(push('/login'))
                    /*本质
                    * dispatch({
                          type:CALL_HISTORY_METHOD,
                            payload:{
                                method:"puth",
                                args:["/login"]
                            }
                    * })
                    * */
                }
            })
        }
    },
    login(body){
        return function (dispatch, getState) {
            login(body).then(payload=>{
                dispatch({type:types.SET_SESSION,payload});
                if(!payload.error){
                    //有2个受保护的路由，登陆成功后要记录从哪跳转来的，react-router-redux记录了状态
                    let state =getState().router.location.state;    //原始路径
                    let target = state?state.from:"/profile";
                    dispatch(push(target));
                }

            })
        }
    }
}
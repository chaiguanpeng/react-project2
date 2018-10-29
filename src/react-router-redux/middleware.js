import {CALL_HISTORY_METHOD} from "./actions"
export default function middleware(history) {
    return function (store) {
        return function (next) {
            return function (action) {
                //{type:CALL_HISTORY_METHOD,payload:{method:"/push",args:["/profile"]}}
                if(action.type == CALL_HISTORY_METHOD){
                    let {method,args} = action.payload;
                    history[method](...args)  //history.push("/profile")
                }else {
                    next(action)
                }
            }
        }
    }
}
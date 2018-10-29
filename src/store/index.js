import {createStore,applyMiddleware} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import promise from "redux-promise";
import logger from "redux-logger";

//跳转路由的中间件
import {routerMiddleware} from "react-router-redux";
import history from "@/history"
let routerWare = routerMiddleware(history);
let store = createStore(reducers,applyMiddleware(promise,thunk,routerWare,logger));
window.store = store;
export default store;
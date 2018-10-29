import * as types from "../action-types";
let initState = {
    category:'all',  //存放课程的分类
    sliders:[],      //放轮播图数据
    lessons:{
        list:[],    //课程列表数据
        hasMore:true,   //是否还有数据
        offset:0,        //取下一页数据的偏移量
        limit:5,    //每页的条数
        loading:false //是否正在加载
    }
}
export default function (state = initState, action) {
    switch (action.type) {
        case types.CHANGE_CATEGORY:
            return {...state,category:action.payload};
        case types.SET_HOME_SLIDERS:
            return {...state,sliders:action.payload};
        case types.SET_HOME_LESSONS:
            //此处list的数据为总的数据，后台返回的是一页的数据{list:[xxx],hasMore:true}
            return {...state,lessons:{
                ...state.lessons,
                list:[...state.lessons.list,...action.payload.list],
                hasMore:action.payload.hasMore,
                    //如果有3条，那么维护的offset为 0+3
                offset:state.lessons.offset+action.payload.list.length,
                loading:false
                }};
            //刷新课程
        case types.REFRESH_HOME_LESSONS:
            return {...state,lessons:{
                    ...state.lessons,
                    list:action.payload.list,
                    hasMore:action.payload.hasMore,
                    offset:action.payload.list.length,
                    loading:false
                }};
            //重置课程2作用在action中说明
        case types.RESET_HOME_LESSONS:
            return {...state,lessons:{
                    ...state.lessons,
                    list:[],
                    hasMore:true,
                    offset:0,
                    loading:true
                }};
         //设置loading为true
        case types.SET_HOME_LOADING:
            return {...state,lessons:{
                    ...state.lessons,
                    loading:action.payload
                }};
        default:
            return state;
    }
}
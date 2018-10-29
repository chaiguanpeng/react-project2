import {get,post} from "./index";
export function login(body) {
    return post('/login',body);
}
export function reg(body) {
    return post('/reg',body);
}
//把本地的cookie发给服务器，服务器判断cookie是否合法，如果合法返回对应的用户，
//不合法返回未登陆的提示
export function validate(body) {
    return get('/validate');
}
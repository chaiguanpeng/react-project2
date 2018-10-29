const DOMAIN = "http://localhost:8080";
export function get(url) {
    return fetch(DOMAIN+url,{
        method:"GET",
        //必须指定此参数才能发送cookie
        credentials:'include',
        headers:{
            "Content-Type" :"application/json",
            "Accept":"application/json",
        }}).then(response=>{
        //必须返回response.json拿到数据
        return response.json()
    })
}
export function post(url,data) {
    return fetch(DOMAIN+url,{
        method:"POST",
        //必须指定此参数才能发送cookie
        credentials:'include',
        headers:{
            "Content-Type" :"application/json",
            "Accept":"application/json",
        },
        body:JSON.stringify(data)
    }).then(response=>{
        return response.json()
    })
}
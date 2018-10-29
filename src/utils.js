//ele要实现加载的dom元素 callback是对应的回调(即重新拿到getLessons)
export function loadMore(element, callback) {
    //实现一个防抖
    let timer;
    element.addEventListener("scroll",function () {
        timer&&clearTimeout(timer);
        timer = setTimeout(function () {
            //可视区域的高度
            let clientHeight = element.clientHeight;
            //向上滚动的高度
            let scrollTop = element.scrollTop;
            //元素总的高度
            let scrollHeight = element.scrollHeight;
            // console.log(clientHeight,scrollTop,scrollHeight);
            if(clientHeight + scrollTop+10 >=scrollHeight){
                callback();
            }
        },300);
    })
}
//下拉刷新
export function downReferesh(element, callback) {
    let startY;     //当按下的时候初始纵坐标
    let distance;   //下拉的距离
    let originTop=element.offsetTop;  //最初的距离 父级顶部的距离
    element.addEventListener("touchstart",function (event) {
        //加2个条件限制,第一当 回弹的时候不能下拉  第二当内容区域滚动短距离后不能下拉
        if(element.offsetTop == originTop && element.scrollTop==0){
            startY = event.touches[0].pageY;
            element.addEventListener("touchmove",touchMove);
            element.addEventListener("touchend",touchEnd);
        }
        function touchMove(event) {
            let pageY = event.touches[0].pageY;
            if(pageY > startY){ //如果越来越大，表示下拉
                distance = pageY - startY;  //移动的距离
                element.style.top = originTop+distance+'px';
            }else {
                element.removeEventListener("touchmove",touchMove);
                element.removeEventListener("touchend",touchEnd);
            }
        }
        function touchEnd(event) {
            element.removeEventListener("touchmove",touchMove);
            element.removeEventListener("touchend",touchEnd);
            // 1、用定时器实现
            let timer = setInterval(function () {
                if(distance<1){ //可能下拉的时候是11.5，小数
                    element.style.top = originTop  + "px";
                    clearInterval(timer);
                }else {
                    element.style.top = originTop + (--distance) + "px";
                }
            },13);
            //2、用动画实现
            // element.style.top = originTop + "px";
            // element.style.transition = "all 1s ease-in";
            if(distance>30){
                callback();
            }
        }
    })
}
## 前后台交互
1、定义仓库中的数据结构
2、后台实现这个接口
3、前台编写一个请求次接口的方法
4、定义action-types，修改reducer并处理次动作
5、编写一个actions方法，用来调用API方法，请求接口，并得到返回的数据
6、在组件中调用次方法
7、在组件中渲染

## react-router-redux实现跳转
1、修改src/index.js
2、store/index.js增加中间件
3、store/actions/session.js中 派发事件
4、创建src/history.js

## react-router-redux实现
> 四个方法 ConnectedRouter,routerReducer,routerMiddleware,push
### 只是为了跳转路径，下面这两个方法就够了
- routerMiddleware 路由中间件
- push 是一个actionCreator，这是一个action的创建者，创建出来是为了派发仓库，
routerMiddleware会拦截这个action，然后跳转路径

### 把路径信息同步到仓库中,以便从仓库中获取
- ConnectedRouter,进行监听，监听路径的变化,当路径发生变化后，派发一个动作@@router/LOCATION_CHANGE
- 然后由routerReducer把location放置到仓库中

## 跨域不会携带cookie
- 修改api/index.js
- 修改了后台cors
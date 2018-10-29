import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./containers/Home/index";
import Detail from "./containers/Detail/index";
import Profile from "./containers/Profiles/index";
import Mime from "./containers/Mime/index";
import Login from "./containers/Login/index";
import Reg from "./containers/Reg/index";
import PrivateRoute from "./components/PrivateRoute"
import Layout from "./containers/Layout/index";
import store from "./store";
import {Provider} from "react-redux";
import {ConnectedRouter} from "react-router-redux";
import history from "./history";
class App extends React.Component{
    render(){
        return (
           <Provider store={store}>
                   <ConnectedRouter history={history}>
                               <Layout>
                               <Switch>
                                   <Route exact path="/" component = {Home}></Route>
                                   <PrivateRoute path="/mime" component = {Mime}></PrivateRoute>
                                   <Route path="/profile" component = {Profile}></Route>
                                   <Route path="/detail/:id" component = {Detail}></Route>
                                   <Route path="/login" component = {Login}></Route>
                                   <Route path="/reg" component = {Reg}></Route>
                               </Switch>

                               </Layout>
                   </ConnectedRouter>
           </Provider>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));


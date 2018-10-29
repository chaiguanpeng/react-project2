import React,{Component,Fragment} from "react";
import HomeHeader from "./components/HomeHeader";
import HomeSwiper from "./components/HomeSwiper";
import HomeLessons from "./components/HomeLessons"
import {loadMore,downReferesh} from "@/utils";
import {connect} from "react-redux";
import actions from "@/store/actions/home";
import "./index.less"
class Home extends Component{
    componentDidMount(){
        this.props.getSliders();
        //获取数据
        this.props.getLessons();
        //3、对应的加载更多
        loadMore(this.mainContent,this.props.getLessons);
        // 4、下拉刷新,
        downReferesh(this.mainContent,this.props.refreshLessons);
    }
    render(){
        let {category,changeCategory,sliders,lessons,refreshLessons} = this.props;
        return (
            <Fragment>
                <HomeHeader category={category} changeCategory = {changeCategory} refreshLessons={refreshLessons}></HomeHeader>
                {/*第一种解决方案，//由于滚动条原因导致切换类别时候2页数据，刷新的时候回到顶端*/}
                {/*<HomeHeader category={category} changeCategory = {changeCategory} refreshLessons={() =>{*/}
                    {/*this.mainContent.scrollTop = 0;*/}
                    {/*refreshLessons();*/}
                {/*}}></HomeHeader>*/}
                <div className="main-content" ref={ref=>this.mainContent=ref}>
                    <HomeSwiper sliders = {sliders}></HomeSwiper>
                    <HomeLessons lessons = {lessons}/>
                    {/*<button onClick={()=>{this.props.getLessons()}}>加载更多</button>*/}
                </div>

            </Fragment>
        )
    }
}
export default connect(state=>state.home,actions)(Home)
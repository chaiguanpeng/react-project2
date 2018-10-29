import React from "react";
import "./index.less";
import ReactSwipe from "react-swipe"
export default class HomeSwiper extends React.Component{
    state = {
        index:0
    };
    render(){
        let {sliders} = this.props;
        let swipeOptions = {
            continuous: true,
            //当轮播图切换的时候调用了setState
            callback:(index)=>{
                this.setState({index})
            }
        };
        return (
            <div className="home-swipe">
                {
                    sliders.length>0?(
                        <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
                            {sliders.map((item,index)=>(
                                <div key={index}><img src={item} alt=""/></div>
                            ))}
                        </ReactSwipe>
                    ):(<div>加载中..</div>)
                }
                <div className="dots">
                    {sliders.map((item,index)=>(
                        <span key={index} className={`dot ${index==this.state.index?"active" : ""}`}></span>
                    ))}
                </div>
            </div>
        )
    }
}
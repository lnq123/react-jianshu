import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight,BackTop } from "./style";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import Topic from "./components/Topic";
import {actionCreators} from './store'
import {connect} from 'react-redux'
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            alt=""
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4581/313b30a87782c9934e69fa46cfd7df0549e55aea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll?<BackTop onClick={()=>(window.scrollTo(0,0))}>顶部</BackTop>:null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount(){
    window.RemoveEventListener('scroll',this.props.changeScrollTopShow)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
  
}
const mapState =(state)=>({
  showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) =>({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(e){
      if(document.documentElement.scrollTop >400){
        dispatch(actionCreators.toggleTopShow(true))
      }else{
        dispatch(actionCreators.toggleTopShow(false))
      }
    }
})
export default connect(mapState,mapDispatch)(Home)
import React, { Component } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo,LoadMore } from "../style";
import {actionCreators} from '../store'
class List extends Component {
  render() {
    const { list,getMoreList,page } = this.props;
    return (
      <div>
        {list.map((item,index) => {
          return (
            <ListItem key={index}>
              <img alt='' className="pic" src={item.get("imgUrl")} />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="body">{item.get("body")} </p>
              </ListInfo>
            </ListItem>
          );
        })}

        <LoadMore onClick={()=>getMoreList(page)}>更多</LoadMore>
      </div>
    );
  }
}
const mapState = state => ({
  list: state.getIn(["home", "articleList"]),
  page:state.getIn(["home",'articlePage'])
});
const mapDispatch =(dispatch)=>({
  getMoreList( page){
    dispatch(actionCreators.getMoreList())
  }
})

export default connect(
  mapState,
  mapDispatch
)(List);

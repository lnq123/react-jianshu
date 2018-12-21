import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../style";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
import faker from 'faker'
class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <Link key={index} to={"/detail/"+item.get('id')}>
              <ListItem>
                <img className="pic"  alt={ faker.image.animals()} src={item.get("imgUrl")} />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="body">{item.get("body")} </p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}

        <LoadMore onClick={() => getMoreList(page)}>更多</LoadMore>
      </div>
    );
  }
}
const mapState = state => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"])
});
const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList());
  }
});

export default connect(
  mapState,
  mapDispatch
)(List);

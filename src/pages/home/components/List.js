import React, { Component } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo } from "../style";

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map(item => {
          return (
            <ListItem>
              <img className="pic" src={item.get("imgUrl")} />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="body">{item.get("body")} </p>
              </ListInfo>
            </ListItem>
          );
        })}
      </div>
    );
  }
}
const mapState = state => ({
  list: state.getIn(["home", "articleList"])
});

export default connect(
  mapState,
  null
)(List);

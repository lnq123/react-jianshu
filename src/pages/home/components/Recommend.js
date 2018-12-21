import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem } from "../style";
import faker from "faker";

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {list.map(item => {
          return (
            <RecommendItem
              alt={faker.image.animals()}
              imgUrl={item.get("imgUrl")}
              key={item.get("id")}
            />
          );
        })}
      </RecommendWrapper>
    );
  }
}
const mapState = state => ({
  list: state.getIn(["home", "recommendList"])
});
export default connect(
  mapState,
  null
)(Recommend);

import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import * as actionCreators from "./store/actionCreators";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitile,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";
import MyIcon from "../../icon";

class Header extends Component {
  
  getListArea() {
    const { focused,list} =this.props
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitile>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitile>
          <SearchInfoList>
            {list.map(item => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            })}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const { focused,handleInputFocus,handleInputBlur} =this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <MyIcon type="icon-Aa" />
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <MyIcon
              type="icon-fangdajing"
              className={focused ? "focused iconfont" : "iconfont"}
            />
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <MyIcon type="icon-icon-pencil" />
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    // focused:state.get('header').get('focused')
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"])
  };
};
const mapDispathToProps = dispatch => {
  
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);

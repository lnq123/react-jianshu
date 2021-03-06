import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import * as actionCreators from "./store/actionCreators";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
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
    const {
      focused,
      totalPage,
      list,
      mouseIn,
      page,
      handleMouseEnter,
      handleChangePage,
      handleMouseLeave
    } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          );
        }
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo>
          <SearchInfoTitile
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
              <MyIcon type="icon-spin" className="spin" />
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitile>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const {
      login,
      focused,
      handleInputFocus,
      handleInputBlur,
      list
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ? (
            <NavItem onClick={this.props.logout} className="right">
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <MyIcon type="icon-Aa" />
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <MyIcon
              type="icon-fangdajing"
              className={focused ? "focused iconfont zoom" : "iconfont zoom"}
            />
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <MyIcon type="icon-icon-pencil" />
              写文章
            </Button>
          </Link>
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
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPage: state.getIn(["header", "totalPage"]),
    login: state.getIn(["login", "login"])
  };
};
const mapDispathToProps = dispatch => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());

      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);

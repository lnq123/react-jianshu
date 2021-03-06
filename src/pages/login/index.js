import React, { PureComponent } from "react";
import { LoginWrapper, LoginBox,Input,Button } from "./style";
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux";
import {actionCreators} from './store'

class Login extends PureComponent {
  render() {
    const {loginState} = this.props
    if(!loginState){
      return (
        <LoginWrapper>
          <LoginBox>
              <Input placeholder='账号' type='account' ref={(input)=>{this.account=input}} />
              <Input placeholder='密码' type='password' ref={(input)=>{this.password=input}}/>
              <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    }else{
      return <Redirect to='/'/>
    }
    
  }
}
const mapState =(state)=>({
  loginState:state.getIn(['login','login'])
})
const mapDispatch = dispatch => ({
    login(accountElem,passwordElem){
      
        dispatch(actionCreators.login(accountElem.value,passwordElem.value))
    }
});
export default connect(
  mapState,
  mapDispatch
)(Login);

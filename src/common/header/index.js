import React,{ Component } from 'react'
import {
  HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem
} from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
            in={this.props.focused}
            timeout={200}
            classNames="slide">
              <NavSearch className={this.props.focused?'focused':''} onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}></NavSearch>
            </CSSTransition>
            <i className={this.props.focused?'focused iconfont':'iconfont'}>&#xe63d;</i>
            <SearchInfo>
              <SearchInfoTitle>热门搜索
                <SearchInfoSwitch>换一换</SearchInfoSwitch>
                <div>
                  <SearchInfoItem>历史</SearchInfoItem>
                  <SearchInfoItem>历史</SearchInfoItem>
                  <SearchInfoItem>历史</SearchInfoItem>
                  <SearchInfoItem>历史</SearchInfoItem>
                  <SearchInfoItem>历史</SearchInfoItem>
                  <SearchInfoItem>历史</SearchInfoItem>
                </div>
              </SearchInfoTitle>
            </SearchInfo>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'><i className="iconfont">&#xe615;</i>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreators.searchFocus()
      dispatch(action)
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
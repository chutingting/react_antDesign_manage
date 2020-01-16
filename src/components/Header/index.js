import React from "react"
import { Row, Col } from "antd"
import "./index.less"
import Util from "./../../utils/utils"
import { connect } from "react-redux"

class Header extends React.Component {
     state = {}
     UNSAFE_componentWillMount() {
          this.setState({
               userName: "React系统"
          })
     this.timeaa = setInterval(() => {
               let time = Util.formateDate(new Date().getTime())
               this.setState({
                    time
               })
          },1000)
     }
     componentWillUnmount() {
          clearInterval(this.timeaa)
     }
     render() {
        return (
             <div className="header">
                  <Row className="header-top">
                       <Col span={24}>
                          <span>欢迎, {this.state.userName}</span>
                          {/* <a href="#">退出</a> */}
                       </Col>
                  </Row>
                  <Row className="header-bottom">
                       <Col span={4}>{this.props.menuName}</Col>
                       <Col span={20} className="weather">{this.state.time} 晴转多云</Col>
                  </Row>
             </div>
        )
     }
}
const mapStateTopProps = state => {
     return {
          menuName: state.menuName
     }
}
export default connect(mapStateTopProps)(Header)
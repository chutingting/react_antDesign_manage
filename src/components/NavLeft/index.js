import React from "react"
import MenuConfig from "./../../config/menuConfig.js"
import "./index.less"
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd';
import { connect } from "react-redux"
import { switchMenu } from "./../../redux/action"
const { SubMenu } = Menu;
class NavLeft extends React.Component {
    state = {
        currentKey: ""
    }
    handleClick = ({ item, key }) => {
        const { dispatch } = this.props
        dispatch(switchMenu(item.props.title))
        this.setState({
            currentKey: key
        })
    }
    UNSAFE_componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig)
        let currentKey = window.location.hash.replace(/#|\?.*$/g, '')
        this.setState({
            menuTreeNode,
            currentKey
        })
    }
    //菜单渲染
    renderMenu = (data) =>{
        return data.map((item) => {
            if(item.children){
               return (
                   <SubMenu title={item.title} key={item.key}>
                       {this.renderMenu(item.children)}
                   </SubMenu>
               )
            }
        return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (
                <div>
                    <div className="logo">
                        <h1>React Manage</h1>
                    </div>

                    <Menu theme="dark" selectedKeys={this.state.currentKey} onClick={this.handleClick}>
                        {this.state.menuTreeNode}
                    </Menu>
                </div>
        )
    }
}
export default connect()(NavLeft)
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
const { Header } = Layout;

class HeaderSection extends Component {
    constructor () {
        super();
        this.state = {
            current: '1'
        }
    }
    _handleClickMenuItem = (e) => {
        this.setState({
            current: e.key
        })
    }
    render () {
        return(
                <Header style={{ width: '100%' }}>
                    <div className="logo" />
                    <Menu
                    onClick={this._handleClickMenuItem}
                    selectedKeys={[this.state.current]}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                    >
                    <Menu.Item key="1">
                        <Link to='/'><Icon type="home" /> Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/users'><Icon type="user" /> Users</Link>
                    </Menu.Item>              
                    </Menu>
                </Header>
        )
    }
}

export default HeaderSection;
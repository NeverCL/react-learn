import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class Sider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        };
        this.autoHeight();
    }

    autoHeight() {
        window.onresize = x => {
            var height = window.innerHeight - 150 + 'px';
            document
                .getElementById('menu')
                .style
                .height = height;
            document
                .getElementById('menu')
                .style
                .overflowY = 'auto';
        };
    }

    clickMenu(e) {
        console.log('click ', e);
    }

    render() {
        return (
            <div>
                <div>
                    <img
                        src={require('./images/logo.png')}
                        width="50"
                        id="logo"
                        onClick={() => this.setState({
                            theme: this.state.theme === 'light'
                                ? 'dark'
                                : 'light'
                        })} /> {/*logo图标*/}
                </div>
                <div id="menu">
                    <Menu
                        theme={this.state.theme}
                        mode="inline"
                        style={{
                            width: 240
                        }}>
                        <SubMenu
                            key="sub1"
                            title={< span > <Icon type="mail" /> < span > Navigation One </span></span >}>
                            <Menu.Item key="1">
                                <IndexLink to="/">
                                    <span><Icon type="home" />
                                        <span>Hello World</span>
                                    </span>
                                </IndexLink>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/profile">
                                    <span>
                                        <Icon type="hdd"></Icon>Profile</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={< span > <Icon type="appstore" /> < span > Navigation Two </span></span >}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={< span > <Icon type="setting" /> < span > Navigation Three </span></span >}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        )
    }
}


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="leftMenu">
                    <Sider />
                </div>
                <div id="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;
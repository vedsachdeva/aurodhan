import React from "react"
import {Menu} from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

export default class MainMenu extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = (e: any) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="inline">
                <Menu.Item key="art-gallery" >
                   Art Gallery
                </Menu.Item>
                <Menu.Item key="artists" >
                    Artists
                </Menu.Item>

                <Menu.Item key="events" >
                    Events
                </Menu.Item>

                <Menu.Item key="stay" >
                    Stays
                </Menu.Item>
            </Menu>
        );
    }
}

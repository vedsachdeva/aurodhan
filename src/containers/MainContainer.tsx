import React from "react"
import {Component} from "react";
import {Layout, Menu, Breadcrumb, Carousel, Card, Avatar, Col, Row, Button, Checkbox, Space, Modal} from 'antd';
import {Form, Input} from 'antd';
import 'antd/dist/antd.css';
import '../App.css'
import {
    CreditCardOutlined, EllipsisOutlined,
    HeartOutlined,
    LoginOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons/lib";
import {Link, useHistory} from "react-router-dom";
import {DetailContainer} from "./DetailContainer";

const {Header, Content, Footer} = Layout;

const options = [
    {label: 'Price', value: 'price'},
    {label: 'Color', value: 'color'},
    {label: 'Artist', value: 'artist'},
];

export class MainContainer extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            loginModalVisible: false,
        }
        // this.history = useHistory();
    }


    handleOk = () => {
        // console.log(e);
        this.setState({
            loginModalVisible: false,
        });
    };

    // @ts-ignore
    handleCancel = () => {
        // console.log(e);
        this.setState({
            loginModalVisible: false,
        });
    };


    render() {
        return (

            <Layout className="layout">
                <Header className={"App-header"}>
                    <Menu mode="horizontal" theme={"light"} defaultSelectedKeys={['2']} className={"App-menu"}>
                        {/*<Menu.Item key="logo" style={{float: 'left'}}>Aurodhan</Menu.Item>*/}
                        <Menu.Item key="home">Home</Menu.Item>
                        <Menu.Item key="about">About</Menu.Item>
                        <Menu.Item key="priyal-karkal">Priyal Karkal</Menu.Item>
                        <Menu.Item key="in" style={{float: 'right'}}>e-mail</Menu.Item>
                        <Menu.Item key="in" style={{float: 'right'}}>in</Menu.Item>
                    </Menu>
                </Header>
                <img src='/images/project1.png'></img>
                <Content>
                    <DetailContainer/>
                </Content>

            </Layout>
        )
    }
}

import React from "react"
import {Component} from "react";
import {Layout, Menu, Breadcrumb, Carousel, Card, Avatar, Col, Row, Button, Checkbox, Space, Modal} from 'antd';
import { Form, Input} from 'antd';
import 'antd/dist/antd.css';
import '../App.css'
import {
    CreditCardOutlined, EllipsisOutlined,
    HeartOutlined,
    LoginOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons/lib";
import {Link, useHistory} from "react-router-dom";

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


    handleAdminClick = () => {
    }

    showModal = () => {
        this.setState({
            loginModalVisible: true,
        });
    };
    // @ts-ignore
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

    showLoginModal = () => {
        this.setState({
            loginModalVisible: true
        })
    }

    render() {
        return (

            <Layout className="layout">
                <Header className={"App-header"}>
                    <Menu mode="horizontal" theme={"light"} defaultSelectedKeys={['2']} className={"App-menu"}>
                        <Menu.Item key="logo" style={{float: 'left'}}>Aurodhan</Menu.Item>
                        <Menu.Item key="art-gallery">Art Gallery</Menu.Item>
                        <Menu.Item key="artists">Artists</Menu.Item>
                        <Menu.Item key="events">Events</Menu.Item>
                        <Menu.Item key="stays">Stays</Menu.Item>
                        <Menu.Item key="admin" onClick={this.handleAdminClick}>Admin</Menu.Item>
                        <Menu.Item key="login" icon={<LoginOutlined/>} style={{float: 'right'}} onClick={this.showModal}/>
                        <Menu.Item key="wish-list" icon={<HeartOutlined/>} style={{float: 'right'}}/>
                        <Menu.Item key="cart" icon={<ShoppingCartOutlined/>} style={{float: 'right'}}/>
                        <Menu.Item key="membership" icon={<CreditCardOutlined/>} style={{float: 'right'}}/>
                    </Menu>
                    <LoginModal visible={this.state.loginModalVisible} handleCancel={this.handleCancel} handleOk={this.handleOk}/>
                </Header>
                <Carousel autoplay>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </Carousel>
                <Content>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Art Gallery</Breadcrumb.Item>
                        <Breadcrumb.Item>Paintings</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{float: 'right', lineHeight: 1.5715}}>
                        <Space size={"middle"} align={"end"}>
                            <span>Sort By:</span>
                            <Checkbox.Group options={options} defaultValue={['color']} onChange={() => {
                            }}/>
                        </Space>
                    </div>
                    <br/>
                    <br/>
                    <div className="site-layout-content">

                        <div className="site-card-wrapper">
                            <Row gutter={16}>
                                <Space size={"middle"}>
                                    {[1, 2, 3].map(() => {
                                        return (
                                            <Col span={6}>
                                                <Card
                                                    style={{width: 400}}
                                                    cover={
                                                        <img
                                                            alt="example"
                                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                                        />
                                                    }
                                                    actions={[
                                                        <ShoppingCartOutlined key="setting"/>,
                                                        <HeartOutlined key="edit"/>,
                                                        <EllipsisOutlined key="ellipsis"/>,
                                                    ]}
                                                >
                                                    <Card.Meta
                                                        avatar={<Avatar
                                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                                        title="Card title"
                                                        description="This is the description"
                                                    />
                                                </Card>,
                                            </Col>
                                        )

                                    })}
                                </Space>
                            </Row>
                        </div>
                        <Col>

                        </Col>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center', height: '160px', background: '#364d79', color: 'white'}}>Aurodhan
                    Art Gallery</Footer>
            </Layout>
        )
    }
}

interface ILoginModalState {

}


interface ILoginModalProps {
    visible: boolean,
    handleOk: () => void,
    handleCancel: () => void
}

class LoginModal extends Component<ILoginModalProps, ILoginModalState> {
    constructor(props: ILoginModalProps) {
        super(props)
        this.state = {visible: false}
    }

    render() {
        return (
            <div>
                <Modal
                    title="Login"
                    visible={this.props.visible}
                    onOk={this.props.handleOk}
                    onCancel={this.props.handleCancel}
                    okText={"continue"}
                >
                    <Input.Group size="large">
                        <Row gutter={8}>
                            <Col span={3}>
                                <Input defaultValue="+91" />
                            </Col>
                            <Col span={10}>
                                <Input  />
                            </Col>
                        </Row>
                    </Input.Group>

                </Modal>
            </div>
        );
    }
}


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Demo = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            {/*<Form.Item {...tailLayout}>*/}
                {/*<Button type="primary" htmlType="submit">*/}
                    {/*Submit*/}
                {/*</Button>*/}
            {/*</Form.Item>*/}
        </Form>
    );
};

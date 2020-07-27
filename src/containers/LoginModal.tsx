import React, {Component} from 'react'
import 'antd/dist/antd.css';
import '../App.css'
import { Modal, Button } from 'antd';

export class LoginModal extends Component {

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    // @ts-ignore
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    // @ts-ignore
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

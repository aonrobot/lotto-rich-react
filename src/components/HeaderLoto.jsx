import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react'
import logo from '../images/logo.png'
  
export default class HeaderLoto extends React.Component{
    render() {
        return (
            <div>
                <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                    <Image size='mini' src={logo} style={{ marginRight: '0.7em' }} />
                        Lotto Rich
                    </Menu.Item>
                    <Menu.Item position="right" className="">
                        ซื้อห่วยง่ายไม่ต้องรอ
                    </Menu.Item>
                </Container>
                </Menu>
            </div>
        )
    }
}
import React from 'react';
import { Container, Header, Button, Label, Input, Icon } from 'semantic-ui-react'
import HeaderLoto from '../components/HeaderLoto'
import '../css/Login.css';

class App extends React.Component  {
  
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <React.Fragment>
            <HeaderLoto></HeaderLoto>
            <Container style={{ margin: '5em 0em 0em', padding: '3em 0em 0em 1em' }} textAlign='left'>
                <div style={{ marginBottom: '2em' }}>
                    <Header size='huge'>กรุณากรอก<br/>เบอร์โทรศัพท์มือถือ</Header>
                    <span>เพื่อรับรหัสเข้าใช้งาน</span>
                </div>
                <Label>Thailand (+66)</Label>
                <Input fluid size='huge' placeholder='0822222222' style={{ marginBottom: '1em' }}/>
                <Button fluid color='linkedin'>
                    เข้าใช้งาน
                    <Icon name='chevron right' />
                </Button>
            </Container>
        </React.Fragment>
      </div>
    );
  }
}

export default App;

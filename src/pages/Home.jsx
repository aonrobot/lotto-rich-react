import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import '../css/Home.css';

class Home extends React.Component  {
  
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'home'
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={this.state.activeItem === 'home'}
            onClick={() => this.setState({ activeItem: 'home' })}
          />
          <Menu.Item
            name='messages'
            active={this.state.activeItem === 'messages'}
            onClick={() => this.setState({ activeItem: 'messages' })}
          />
          <Menu.Item
            name='friends'
            active={this.state.activeItem === 'friends'}
            onClick={() => this.setState({ activeItem: 'friends' })}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={this.state.activeItem === 'logout'}
              onClick={() => this.setState({ activeItem: 'logout' })}
            />
          </Menu.Menu>
        </Menu>
  
        <Segment>
          <h2>Lotto Rich</h2>
        </Segment>
      </div>
    );
  }
}

export default Home;

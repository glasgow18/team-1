import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Navigation, Layout, Header, Drawer, Content } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className='header-colour'title="My Portfolio" scroll>
          
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;

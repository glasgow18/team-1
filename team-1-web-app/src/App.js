import React, { Component } from 'react';
import Main from './components/main';
import { Link } from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className='header-colour' title="Discovery" scroll>

        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/search">SearchPage</Link>
                <Link to="/addactivity">ActivityPage</Link>
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

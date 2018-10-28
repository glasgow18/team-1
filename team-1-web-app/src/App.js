import React, { Component } from 'react';
import Main from './components/main';
import { Link } from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Login from './components/login';
import SearchPage from './components/searchpage';
import SearchBar from './components/searchbar';
import ActivityPage from './components/activitypage';
import AddActivity from './components/addactivity';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className='header-colour'title="Discovery" scroll>
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
            <Main/>
        </Content>
    </Layout>


      <div className="container-fluid main-wrapper">
      <div className="row">
        <div className="col-sm-2">
        </div>
        <div className="col-sm-8">
          <div className="jumbotron">
            <h1 className="text-center header">Artlink</h1>
            <p className="text-center lead subheading">fancy subheading</p>
          </div>
        </div>
        <div className="col-sm-2">
        </div>
      </div>
      <div className="row">
      <div className="col-sm-12">
      <SearchPage/>
      </div>
      </div>
    </div>
</div>



    );
  }
}

export default App;

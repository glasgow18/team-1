import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Login from './components/login';
import SearchPage from './components/searchpage';


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
            <Link to="/search">SearchPage</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="jumbotron text-centre">
          <h2>ArtLink</h2>
          <p className="lead">subheading</p>
        </div>
      </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="jumbotron">
            <h4>Search an Activity</h4>
            <p>redirect to searchpage</p>
        </div>
      </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="jumbotron">
            <h4>Add an Activity</h4>
            <p>redirect to add activity</p>
            <div id="addActivityButton">
                <button onclick="location.href='AddActivity.html'">Add an Activity</button>
            </div>
        </div>
      </div>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="jumbotron">
            <h4>Recent Activities</h4>
            <div className="card">
              <div className="card-body">
                <h3>Kicking Leaves</h3>
                <p className="lead">Kick some leaves</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

</div>
    );
  }
}

export default App;

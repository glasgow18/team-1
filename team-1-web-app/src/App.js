import React, { Component } from 'react';
import Main from './components/main';
import { Link } from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';

class App extends Component {

  //     loadRecentActivities() {
  //     var recentActivitiesList = document.getElementById("recentActivitiesList");
  //     var json = '{"id": 1,"name": "Kicking Leaves","description": "Kicking leaves for people who like kicking leaves","mapFlag": true,"lat": 28,"long": 30,"comments": ["Colin luvs it", "Very nice"],"tags": ["sound", "leaves", "outside"]}';
  //     var content = JSON.parse(json);
  //
  //     for (var comment in content.comments) {
  //         console.log(content.comments[comment]);
  //     }
  //
  //     recentActivitiesList.innerHTML = "<table>" +
  //         "<tr>" +
  //             "<th>Name</th>" +
  //             "<th>Description</th>" +
  //         "</tr>" +
  //         "<tr>" +
  //             "<td>" +
  //             content.name +
  //             "</td>"+
  //             "<td>" +
  //             content.description +
  //             "</td>" +
  //         "</tr>" +
  //         "</table>"
  // }



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
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>

</div>
    );
  }
}

export default App;

import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from './login';
import SearchPage from './searchpage';
import Register from './register';


const Main = () =>(
    <Switch>
        <Route exact path = "/login" component= {Login} />
        <Route exact path = "/register" component={Register}/>
        <Route exact path = "/search" component={SearchPage}/>
    </Switch>
)

export default Main;
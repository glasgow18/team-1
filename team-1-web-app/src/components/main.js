import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from './login';


const Main = () =>(
    <Switch>
        <Route exact path = "/login" component= {Login} />
    </Switch>
)

export default Main;
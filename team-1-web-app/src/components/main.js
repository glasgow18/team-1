import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from './login';
import Register from './register';


const Main = () =>(
    <Switch>
        <Route exact path = "/login" component= {Login} />
        <Route exact path = "/register" component={Register}/>
    </Switch>
)

export default Main;
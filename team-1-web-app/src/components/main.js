import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from './login';
import SearchPage from './searchpage';
import Register from './register';
import ActivityPage from './activitypage';


const Main = () =>(
    <Switch>
        <Route exact path = "/login" component= {Login} />
        <Route exact path = "/register" component={Register}/>
        <Route exact path = "/search" component={SearchPage}/>
        <Route exact path= "/activitypage" componenet={ActivityPage}/>
    </Switch>
)

export default Main;

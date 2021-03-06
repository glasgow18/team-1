import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './register.css';
var sha256 = require("sha256");

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const state = JSON.stringify({
            email: this.state.email,
            password: sha256(this.state.password)
        });
        const URL = "http://localhost:8080/login";

        fetch(URL, {
            method: 'POST',
            body: state,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }
    render(){
        return(

            <div className="container-fluid login-wrapper">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="LoginForum" onSubmit={this.handleSubmit}>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                                    <input type="email" id="email" className="FormField__Input"
                                           placeholder="Enter your email" name="email" value={this.state.email}
                                           onChange={this.handleChange}/>
                                </div>

                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="password">Password</label>
                                    <input type="password" id="password" className="FormField__Input"
                                           placeholder="Enter your password" name="password" value={this.state.password}
                                           onChange={this.handleChange}/>
                                </div>

                                <div className="FormField">
                                    <button className="FormField__Button mr-20">Sign In</button>
                                    <Link to="/register" className="FormField__Link">Create an account</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
          </div>
        )
    }
}

export default Login;

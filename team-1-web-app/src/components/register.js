import React, { Component } from 'react';
var sha256 = require("sha256");

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            confirmedPassword: ''
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
        if (this.checkForm) {
            console.log("Password is " + sha256(this.state.password));

            const state = JSON.stringify({
                email: this.state.email,
                password: sha256(this.state.password)
            });
            const URL = "http://localhost:8080/register";

            fetch(URL, {
                method: 'PUT',
                body: state,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(response => console.log('Success:', JSON.stringify(response)))
                .catch(error => console.error('Error:', error));

        }
    }

    checkForm() {
        if (this.state.email === "" || this.state.email === null) {
            console.log("Please enter a valid email");
            return false;
        }
        else if (this.state.password === "" || this.state.password === null) {
            console.log("Please enter a valid password")
            return false;
        }
        else if (this.state.password !== this.state.confirmedPassword) {
            console.log("Please retype your password to confirm");
            return false;
        }
        else {
            return true;
        }


    }
    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="RegisterForum" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="confirmedPassword">Confirm Password</label>
                        <input type="password" id="confirmedpassword" className="FormField__Input" placeholder="Confirm Password" name="confirmedPassword" value={this.state.confirmedPassword} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;
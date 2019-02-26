import React, { Component } from "react";

class LoginComponent extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log('Email: ' + this.email.value);
        console.log('Password: ' + this.password.value);
        e.preventDefault();
    }

    render() {
        return (
            <div className="login-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Email" ref={(email) => this.email = email} />
                    <input type="password" placeholder="Password" ref={(password) => this.password = password} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default LoginComponent;

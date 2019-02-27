import React, { Component } from "react";

import Slide from "../../main/components/slide.component";

import "../styles/auth.scss";

class LoginComponent extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log('Email: ' + this.email.value);
        console.log('Password: ' + this.password.value);
        this.props.login(this.email.value, this.password.value);
        e.preventDefault();
    }

    render() {
        return (
            <div className="login-wrapper">
                <div className="login-slide">
                    <Slide />
                </div>
                <div className="login-form">
                    <h2>Sign in to Eventio.</h2>
                    <span>Enter your details below.</span>
                    <form onSubmit={this.handleSubmit}>
                        <div className="wrap-input">
                            <input type="text" placeholder="Email" ref={(email) => this.email = email} />
                        </div>
                        <div className="wrap-input">

                            <input type="password" placeholder="Password" ref={(password) => this.password = password} />
                            <span className="btn-show-pass">
                                <i className="fas fa-eye"/>
                            </span>
                        </div>
                        <button className="sign-in-button"> SIGN IN </button>
                    </form>
                </div>
                <div className="sign-up">
                    <span>Don't have account?</span><a href="#">SIGN UP</a>
                </div>
            </div>
        );
    }
}

export default LoginComponent;

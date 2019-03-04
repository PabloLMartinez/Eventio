import React, { Component } from "react";

import Slide from "../../main/components/SlideComponent";

import "../styles/auth.scss";

class LoginComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            isAuthenticated: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.props.login(this.email.value, this.password.value);
        this.setState({
            isAuthenticated: this.props.isAuthenticated
        });
        e.preventDefault();
    }

    render() {
        const { width, isAuthenticated } = this.state;
        const isMobile = width <= 500;

        const errorMessage = isAuthenticated ? (
            <span>Enter your details below.</span>
        ) : (
            <span className="errorMessage">Oops! That email and password combination is not valid.</span>
        );

        if (isMobile) {
            return (
                <div className="login-wrapper-mobile">
                    <div className="logo-mobile" />
                    <div className="login-form">
                        <h2>Sign in to Eventio.</h2>
                        {errorMessage}
                        <form onSubmit={this.handleSubmit}>
                            <div className={isAuthenticated ? "wrap-input" : "wrap-input-error" }>
                                <input type="text" placeholder="Email" ref={(email) => this.email = email}/>
                            </div>
                            <div className={isAuthenticated ? "wrap-input" : "wrap-input-error" }>
                                <input type="password" placeholder="Password"
                                       ref={(password) => this.password = password}/>
                                <span className="btn-show-pass">
                                    <i className="fas fa-eye"/>
                                </span>
                            </div>
                            <div className="sign-up">
                                <span>Don't have account?</span><a href="#">SIGN UP</a>
                            </div>
                            <button className="sign-in-button"> SIGN IN</button>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="login-wrapper-desktop">
                    <div className="login-slide">
                        <Slide/>
                    </div>
                    <div className="login-form">
                        <h2>Sign in to Eventio.</h2>
                        {errorMessage}
                        <form onSubmit={this.handleSubmit}>
                            <div className={isAuthenticated ? "wrap-input" : "wrap-input-error" }>
                                <input type="text" placeholder="Email" ref={(email) => this.email = email}/>
                            </div>
                            <div className={isAuthenticated ? "wrap-input" : "wrap-input-error" }>
                                <input type="password" placeholder="Password"
                                       ref={(password) => this.password = password}/>
                                <span className="btn-show-pass">
                                    <i className="fas fa-eye"/>
                                </span>
                            </div>
                            <button className="sign-in-button"> SIGN IN</button>
                        </form>
                    </div>
                    <div className="sign-up">
                        <span>Don't have account?</span><a href="#">SIGN UP</a>
                    </div>
                </div>
            );
        }
    }
}

export default LoginComponent;

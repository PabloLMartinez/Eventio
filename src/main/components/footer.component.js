import React, { Component } from "react";

import "../styles/footer.scss";

class FooterComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        if (isMobile) {
            return (
                <footer className="footer-mobile">
                    <button>+</button>
                </footer>
            );
        } else {
            return (
                <footer className="footer-desktop">
                    <button>+</button>
                </footer>
            );
        }
    }
}

export default FooterComponent;

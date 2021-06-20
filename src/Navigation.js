import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    Image
} from "react-bulma-components";

class Navigation extends React.Component {

    constructor(props) {
        super(props)
        this.state = { isActive: false }
        this.toggleActive = this.toggleActive.bind(this);

    }

    toggleActive() {
        this.setState({ isActive: !this.state.isActive });
    }
    render() {

        let className = "";
        if (this.state.isActive) {
            className = "is-active";
        }

        return (
            <Navbar fixed="top" style={{ width: "100vw" }}>
                <Navbar.Brand>
                    <Navbar.Item renderAs={Link} to="/">
                        <Image size="32x32" src="/photos/bionic-eye.svg" />
                    </Navbar.Item>
                    <Navbar.Burger className={className} data-target="navbarMenu" onClick={this.toggleActive} />
                </Navbar.Brand>
                <Navbar.Menu className={className} id="navbarMenu">
                    <Navbar.Container>
                        <Navbar.Item renderAs={Link} to="/">Home</Navbar.Item>
                        <Navbar.Item renderAs={Link} to="/about">About</Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default Navigation;
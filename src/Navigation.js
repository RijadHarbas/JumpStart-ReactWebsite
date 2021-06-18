import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    Image
} from "react-bulma-components";

class Navigation extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Brand>
                    <Navbar.Item renderAs={Link} to="/">
                        <Image size="32x32" src="/photos/bionic-eye.svg" />
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
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
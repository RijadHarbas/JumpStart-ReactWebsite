import React from "react"
import Highlight from "./Highlight.js";
import Navigation from "./Navigation.js";

class Header extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <Highlight />
            </div>
        )
    }
}

export default Header;
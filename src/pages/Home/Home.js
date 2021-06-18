import React from "react";
import Highlight from "./Highlight";
import Main from "./Main";


class Home extends React.Component {

    render() {
        return (
            <div>
                <Highlight />
                <Main />
            </div>
        )
    }
}

export default Home;
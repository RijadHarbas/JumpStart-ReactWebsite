import React from "react";
import { Hero, Heading, Container } from "react-bulma-components";
import "./Highlight.css";

class Highlight extends React.Component {

    render() {
        return (
            <Hero backgroundColor="info" size="fullheight" className="has-background">
                <img alt="" class="hero-background" src="/photos/V.jpg" />
                <Hero.Body>
                    <Container>
                        <Heading textColor="primary">CYBER PUNK</Heading>
                    </Container>
                </Hero.Body>
            </Hero>
        )
    }
}

export default Highlight;
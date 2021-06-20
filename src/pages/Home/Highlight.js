import React from "react";
import { Hero, Heading, Container } from "react-bulma-components";
import "./Highlight.css";

class Highlight extends React.Component {

    render() {
        return (
            <Hero backgroundColor="info" size="fullheight" className="has-background">
                <img alt="" className="hero-background" src="/photos/V.jpg" />
                <Hero.Body>
                    <Container>
                        <Heading textColor="light" size="1" weight="bold">CYBER <span className="bright-green">PUNK</span></Heading>
                        <Heading textColor="light" subtitle="true" size="3" >The future is now</Heading>
                    </Container>
                </Hero.Body>
            </Hero>
        )
    }
}

export default Highlight;
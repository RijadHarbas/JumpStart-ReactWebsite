import React from "react";
import Highlight from "./Highlight";
import PhotosCarousel from "./PhotosCarousel";
import { Section, Container, Level, Heading } from "react-bulma-components";

import "./Home.css";

class Home extends React.Component {

    render() {
        return (
            <div>
                <Highlight />
                <Section>
                    <Container>
                        <Level>
                            <Level.Item>
                                <Heading >WAKE UP, SAMURAI</Heading>
                            </Level.Item>
                        </Level>
                        <Level>
                            <Level.Item>
                                <Heading textColor="info" subtitle="true">We've got a city to burn</Heading>
                            </Level.Item>
                        </Level>
                    </Container>
                </Section>
                <Section>
                    <PhotosCarousel></PhotosCarousel>
                </Section>
            </div>
        )
    }
}

export default Home;
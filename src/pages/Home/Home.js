import React from "react";
import Highlight from "./Highlight";
import PhotosCarousel from "./PhotosCarousel";
import { Section, Container, Image, Heading, Columns } from "react-bulma-components";

class Home extends React.Component {

    render() {
        return (
            <div>
                <Highlight />
                <Section>
                    <Container>
                        <Heading className="has-text-centered">WAKE UP, SAMURAI</Heading>
                        <Heading className="has-text-centered" textColor="dark" subtitle="true">We've got a city to <span className="is-danger">burn</span></Heading>
                    </Container>
                </Section>
                <Section>
                    <PhotosCarousel></PhotosCarousel>
                </Section>
                <Section>
                    <Container>
                        <Columns>
                            <Columns.Column>
                                <Heading textColor="dark">What are you waiting for?</Heading>
                                <Heading textColor="dark" subtitle="true">I'll see you in Night City.</Heading>
                                <Columns>
                                    <Columns.Column>
                                        <iframe title="steamWidget" src="https://store.steampowered.com/widget/1091500/" frameborder="0" width="646" height="190"></iframe>
                                    </Columns.Column>
                                </Columns>
                            </Columns.Column>
                            <Columns.Column>
                                <Image size="16by9" src="/photos/johnny.jpg" />
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Section>
            </div>
        )
    }
}

export default Home;
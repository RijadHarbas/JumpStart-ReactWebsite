import React from "react";
import { Section, Container, Content } from "react-bulma-components";

class About extends React.Component {

    render() {
        return (
            <Section>
                <Container>
                    <Content>
                        <h1>About this page</h1>
                        <p>
                            I made this website because I wanted to improve my React.js and my design skills.
                            The reason I picked Cyber Punk as the theme for this page is because I find the world of Cyber Punk very interesting.
                            I also like the design choices that something "Cyber Punk" represents.
                        </p>
                        <p>
                            Bright, bold, neon colours and high contrast, darker colours are typically utilized and combined with otherworldy, utopian, imagery.
                            More often than not, the people of Cyber Punk enchance their bodies with bionic components - becoming part human, part machine.
                            I was also inspired by movies like "Judge Dredd", "Blade Runner" or "I-Robot".
                            Hopefully, I did the genre justice with this page.
                        </p>
                        <h2>Tools</h2>
                        <p>
                            I used various tools in the process of creating this website. They made some parts a lot easier.
                            In the oncoming sections I'll give credit to them.
                        </p>
                        <h3>React.js</h3>
                        <p>
                            React is an open-source front-end JavaScript library for creating UIs that just work.
                            It is developed by Facebook.
                        </p>
                        <a href="https://reactjs.org/">React Homepage</a>
                        <h3>React Router</h3>
                        <p>
                            React Router adds various components that add routing capabilities to your page.
                        </p>
                        <a href="https://reactrouter.com/web/guides/quick-start">React Router homepage</a>
                        <h3>Bulma</h3>
                        <blockquote>
                            "Bulma is a free, open source framework that provides ready-to-use frontend components
                            that you can easily combine to build responsive web interfaces."
                        </blockquote>
                        <p>
                            I tried two CSS frameworks so far: Bootstrap and Bulma. IMHO, Bulma is more fun to work with and better than Bootstrap.
                            Bootstrap is more confusing and Bulma is more concise.
                        </p>
                        <a href="https://bulma.io/">Bulma Homepage</a>
                        <h3>React Bulma components</h3>
                        <p>
                            React Bulma components is a React wrapper for all things Bulma. It is also compatible with React Router
                        </p>
                        <a href="https://react-bulma.dev/en/">React Bulma components Homepage</a>
                        <h3>Bulma Carousel</h3>
                        <p>
                            Bulma Carousel is an extension to Bulma that adds a carousel slider to your page.
                        </p>
                        <a href="https://bulma-carousel.onrender.com/">Documentation for Bulma Carousel</a>
                        <h2>Image credit</h2>
                        <p>All the images belong to the respective owners. I do not own any of the images.</p>
                        <h3>Images in the carousel (From Left to Right):</h3>
                        <ul>
                            <li>
                                1: Photo by <a href="https://unsplash.com/@lyovon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Levon Vardanyan</a> on <a href="https://unsplash.com/s/photos/neon-city?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            </li>
                            <li>
                                2: Photo by <a href="https://unsplash.com/@efekurnaz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Efe Kurnaz</a> on <a href="https://unsplash.com/s/photos/neon-cyberpunk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            </li>
                            <li>
                                3: Photo by <a href="https://unsplash.com/@wilmerlens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Wilmer Martinez</a> on <a href="https://unsplash.com/s/photos/cyberpunk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            </li>
                            <li>
                                4: Photo by <a href="https://unsplash.com/@nitishgoswami?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NITISH GOSWAMI</a> on <a href="https://unsplash.com/s/photos/cyberpunk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            </li>
                            <li>
                                5: Photo by <a href="https://unsplash.com/@wilmerlens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Wilmer Martinez</a> on <a href="https://unsplash.com/s/photos/cyberpunk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            </li>
                        </ul>
                        <h3>V and Johnny Silverhand</h3>
                        <p>
                            Both the Hero image and the image on the bottom of the page belong to CD Project Red.
                        </p>
                        <h3>The icon in the Navbar</h3>
                        <ul>
                            <li>
                                bionic-eye icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                            </li>
                        </ul>
                    </Content>
                </Container>
            </Section>
        )
    }
}



export default About;
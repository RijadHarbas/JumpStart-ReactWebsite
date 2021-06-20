import React from "react";
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import "bulma-carousel/dist/css/bulma-carousel.min.css";

import { Image } from "react-bulma-components";

class PhotosCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.loadImages = this.loadImages.bind(this);
    }

    componentDidMount() {
        bulmaCarousel.attach("#slider", {
            slidesToScroll: 1,
            slidesToShow: 3,
            loop: true,
            initialSlide: 1
        })
    }

    loadImages() {
        const images = [];
        const imgFolder = "/photos/main/";
        for (let i = 1; i < 6; i++) {
            let img = <Image key={`${imgFolder}${i}.jpg`} size="3by4" src={`${imgFolder}${i}.jpg`} />
            images.push(img);
        }
        return images;
    }


    render() {
        const images = this.loadImages();
        return (
            <div id="slider" className="carousel is-clipped">
                {images}
            </div>
        )
    }

}

export default PhotosCarousel;
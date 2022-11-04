import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import breja from '../public/images/cerveja.png'
  
export default class NextJsCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={breja} alt="image1"/>
                    <p className="legend">Image 1</p>
                </div>
                
                <div>
                    <img src={breja} alt="image2" />
                    <p className="legend">Image 2</p>
                </div>
            </Carousel>
        );
    }
};